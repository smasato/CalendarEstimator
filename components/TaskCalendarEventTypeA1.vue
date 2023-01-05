<script lang="ts">
import { isEventHiddenOn } from "vuetify/lib/components/VCalendar/util/events";
import {
  getDayIdentifier,
  parseDate,
  MINUTES_IN_DAY,
} from "vuetify/lib/components/VCalendar/util/timestamp";
import dayjs from "dayjs";
import TaskCalendarEventBase from "./TaskCalendarEventBase";

// 先行研究のドットプロットにおける確率の表示方法を参考にした
export default TaskCalendarEventBase.extend({
  name: "TaskCalendarEventTypeA1",
  methods: {
    genTimedEvent({ event, left, width }, day) {
      if (event.input.type === "normal") {
        return this.genTimedEventOriginal({ event, left, width }, day);
      }
      if (
        day.timeDelta(event.end) < 0 ||
        day.timeDelta(event.start) >= 1 ||
        isEventHiddenOn(event, day)
      ) {
        return false;
      }

      const dayIdentifier = getDayIdentifier(day);
      const start = event.startIdentifier >= dayIdentifier;
      const end = event.endIdentifier > dayIdentifier;
      const top = start ? day.timeToY(event.start) : 0;
      const bottom = end ? day.timeToY(MINUTES_IN_DAY) : day.timeToY(event.end);
      // @ts-ignore
      const height = Math.max(this.eventHeight, bottom - top);
      const scope = {
        eventParsed: event,
        day,
        start,
        end,
        timed: true,
      };

      const yMaxIndex = event.input.estimateResult.histogram.y.reduce(
        (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
        0
      );

      const percents: { xPercent; percent }[] = [];
      event.input.estimateResult.histogram.x.forEach((x, i) => {
        const y = event.input.estimateResult.histogram.y[i];
        const xDate = parseDate(
          dayjs(event.input.start).add(x, "minute").toDate()
        );
        const xTop = day.timeToY(xDate);
        const xPercent = this.calcPercentPosition(xTop - top, height);
        const percent = y / event.input.estimateResult.histogram.y[yMaxIndex];
        percents.push({ xPercent, percent });
      });

      const linerColorStops: string[] = ["rgb(33 150 243 / 0) 0%"];
      percents.forEach((p) => {
        linerColorStops.push(`rgb(33 150 243 / ${p.percent}) ${p.xPercent}%`);
      });
      const linearGradient = `linear-gradient(to bottom, ${linerColorStops.join(
        ", "
      )})`;
      const backGroundColor = "rgb(241 241 241 / 1)";

      // @ts-ignore
      return this.genEvent(event, scope, true, {
        staticClass: "v-event-timed",
        style: {
          border: "transparent !important",
          top: `${top}px`,
          height: `${height}px`,
          left: `${left}%`,
          width: `${width}%`,
          background: `${linearGradient}, ${backGroundColor} !important`,
        },
      });
    },
  },
});
</script>
