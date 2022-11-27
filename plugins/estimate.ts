import { Plugin } from "@nuxt/types";
import { jStat } from "jstat";
import seedrandom from "seedrandom";
import { SubTask, Surprise, Task, Unit, MinutesRange } from "~/types/task";

/*
    TimeEstimator
    Copyright (C) 2021 Koval, Morgane and Jansen, Yvonne

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const Z_SCORE = zScoreJStat();
const NUM_SAMPLES = 10000;

function zScoreJStat(): number {
  const conf_level = 0.95;
  return jStat.normal.inv(0.5 + conf_level / 2, 0, 1);
}

function getMean(low: number, up: number): number {
  return Math.exp((Math.log(low) + Math.log(up)) / 2.0);
}

function getSD(low: number, up: number): number {
  return Math.exp((Math.log(up) - Math.log(low)) / Z_SCORE / 2);
}

function sumUp(total: number, num: number): number {
  return total + num;
}

function getTaskSample(subTasks: Array<SubTask>): number {
  let sumMed = 0;
  subTasks.forEach(function (subTask) {
    const minuteRange = toMinutes(subTask.range, subTask.unit);
    sumMed += getSample(minuteRange);
  });
  return sumMed;
}

function getSurpriseSample(surprises: Surprise[]): number {
  let sumMed = 0;
  surprises.forEach(function (surprise) {
    if (
      jStat.uniform.sample(0, 1) <=
      surprise.probability[0] / surprise.probability[1]
    ) {
      const minuteRange = toMinutes(surprise.range, surprise.unit);
      const value = getSample(minuteRange);
      if (surprise.eventType == "slower") sumMed += value;
      else sumMed -= value;
    }
  });
  return sumMed;
}

function getSample(range: MinutesRange): number {
  const low = pos(range.low);
  const up = pos(range.up);
  return jStat.lognormal.sample(
    Math.log(getMean(low, up)),
    Math.log(getSD(low, up))
  );
}

function pos(v: number): number {
  return Math.max(0.1, v);
}

function toMinutes(range: [number, number], unit: Unit): MinutesRange {
  switch (unit) {
    case "minute(s)":
      return { low: range[0], up: range[1] };
    case "hour(s)":
      return { low: range[0] * 60, up: range[1] * 60 };
    case "day(s)":
      return {
        low: range[0] * 60 * 24,
        up: range[1] * 60 * 24,
      };
  }
}

export type Histogram = {
  x: number[];
  y: number[];
};

function getHistogram(samples: number[]): Histogram {
  const xMax = jStat.max(samples);
  const xMin = jStat.min(samples);
  const bins = 1 + Math.floor(Math.log2(samples.length)); // Sturges' formula
  const binWidth = (xMax - xMin) / bins;

  const x: number[] = Array.from(Array(bins).keys()).map(
    (i) => xMin + i * binWidth
  );
  const y: number[] = jStat.histogram(samples, bins);

  return { x, y };
}

export type EstimateResult = {
  mean: number;
  median: number;
  max: number;
  min: number;
  sd: number;
  samples: number[];
  histogram: { x: number[]; y: number[] };
};

function estimate(task: Task): EstimateResult {
  seedrandom("time", { global: true });
  jStat.setRandom(Math.random);

  let maxVal = 0;
  const samples: number[] = [];

  for (let i = NUM_SAMPLES - 1; i >= 0; i--) {
    const newSample = Math.max(
      getTaskSample(task.subTasks) + getSurpriseSample(task.surprises),
      0
    );
    samples.push(newSample);
    maxVal = maxVal < newSample ? newSample : maxVal;
  }
  return {
    mean: samples.reduce(sumUp) / NUM_SAMPLES,
    median: jStat.median(samples),
    max: maxVal,
    min: jStat.min(samples),
    sd: jStat.stdev(samples),
    samples: samples.sort(),
    histogram: getHistogram(samples),
  };
}

export interface EstimatePluginInterface {
  estimate: (task: Task) => EstimateResult;
}

class EstimatePlugin implements EstimatePluginInterface {
  estimate(task: Task) {
    return estimate(task);
  }
}

const estimatePlugin: Plugin = ({ app }, inject): void => {
  inject("estimate", new EstimatePlugin());
};

export default estimatePlugin;
