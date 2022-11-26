import { Plugin } from "@nuxt/types";
import { jStat } from "jstat";
import { erfcinv } from "@stdlib/math/base/special";
import { SubTask, Surprise, Task, Unit, MinutesRange } from "~/types";
import seedrandom from "seedrandom";

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

jStat.setRandom(seedrandom("time"));

const z_score = zScoreJStat();
const num_samples = 10000;

function zScoreJStat() {
  const conf_level = 0.95;
  return jStat.normal.inv(0.5 + conf_level / 2, 0, 1);
}

function zScorStdlib() {
  const conf_level = 0.95;
  return -1.41421356237309505 * 1 * erfcinv(2 * (0.5 + conf_level / 2)) + 0;
}

function getMean(low: number, up: number) {
  return Math.exp((Math.log(low) + Math.log(up)) / 2.0);
}

function getSD(low: number, up: number) {
  return Math.exp((Math.log(up) - Math.log(low)) / z_score / 2);
}

function sumUp(total: number, num: number) {
  return total + num;
}

function getTaskSample(subTasks: Array<SubTask>) {
  let sumMed = 0;
  subTasks.forEach(function (subTask) {
    const minuteRange = toMinutes(subTask.range, subTask.unit);
    sumMed += getSample(minuteRange);
  });
  return sumMed;
}

function getSurpriseSample(surprises: Surprise[]) {
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

function getSample(range: MinutesRange) {
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
      return { low: range[0], up: range[1] } as MinutesRange;
    case "hour(s)":
      return { low: range[0] * 60, up: range[1] * 60 } as MinutesRange;
    case "day(s)":
      return {
        low: range[0] * 60 * 24,
        up: range[1] * 60 * 24,
      } as MinutesRange;
  }
}

function calc(subTasks: Array<SubTask>, surprises: Surprise[]) {
  let maxVal = 0;
  let samples: number[] = [];

  for (var i = num_samples - 1; i >= 0; i--) {
    const newSample = Math.max(
      getTaskSample(subTasks) + getSurpriseSample(surprises),
      0
    );
    samples.push(newSample);
    maxVal = maxVal < newSample ? newSample : maxVal;
  }
  return {
    mean: samples.reduce(sumUp) / num_samples,
    median: jStat.median(samples),
    max: maxVal,
    min: jStat.min(samples),
    sd: jStat.stdev(samples),
    samples: samples.sort(),
  };
}

export interface CalcPluginInterface {
  calc: (task: Task) => any;
}

class CalcPlugin implements CalcPluginInterface {
  calc(task: Task) {
    return calc(task.subTasks, task.surprises);
  }
}

const calcPlugin: Plugin = ({ app }, inject): void => {
  inject("calc", new CalcPlugin());
};

export default calcPlugin;
