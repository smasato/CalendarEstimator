import { Plugin } from "@nuxt/types";
import { jStat } from "jstat";
import { SubTask, Surprise } from "~/types";

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

const conf_level = 0.95;
const z_score = jStat.normal.inv(0.5 + conf_level / 2, 0, 1);

function getMean(low: number, up: number) {
  return Math.exp((Math.log(low) + Math.log(up)) / 2.0);
}

function getSD(low: number, up: number) {
  return Math.exp((Math.log(up) - Math.log(low)) / z_score / 2);
}

function sumUp(total: number, num: number) {
  return total + num;
}

function getTaskSample(subTasks: SubTask[]) {
  let summed = 0;
  subTasks.forEach(function (subTask) {
    summed += getSample(subTask.range);
  });
  return summed;
}

function getSurpriseSample(surprises: Surprise[]) {
  let summed = 0;
  surprises.forEach(function (surprise) {
    if (
      jStat.uniform.sample(0, 1) <=
      surprise.probability[0] / surprise.probability[1]
    ) {
      const value = getSample(surprise.range);
      if (surprise.eventType == "slower") summed += value;
      else summed -= value;
    }
  });
  return summed;
}

function getSample(range: [number, number]) {
  const low = pos(range[0]);
  const up = pos(range[1]);
  return jStat.lognormal.sample(
    Math.log(getMean(low, up)),
    Math.log(getSD(low, up))
  );
}

// TODO
function getDelay(data: any, longer = true) {
  let delay = 0;
  let l = data["likelihood"].length; // TODO
  if (!longer) {
    l -= 1;
  }
  for (let i = 0; i < l; i++) {
    const happens = jStat.uniform.sample(0, 1) <= data["likelihood"][i];
    if (happens) {
      delay += getSample([pos(data["lower"][i]), pos(data["upper"][i])]);
    }
  }
  return delay;
}

function pos(v: number) {
  return Math.max(0.1, v);
}

const calc: Plugin = ({ app }, inject): void => {
  inject("calc", {}); // TODO
};

export default calc;
