<script lang="ts">
import { VCalendar } from "vuetify/lib";
import { isEventHiddenOn } from "vuetify/lib/components/VCalendar/util/events";
import {
  getDayIdentifier,
  parseDate,
  MINUTES_IN_DAY,
} from "vuetify/lib/components/VCalendar/util/timestamp";
import dayjs from "dayjs";

// y[0]からy[i]までの合計値から割合を計算する
export default VCalendar.extend({
  name: "TaskCalendarEventTypeB",
  methods: {
    genTimedEvent({ event, left, width }, day) {
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
        let ySum = 0;
        for (let j = 0; j <= i; j++) {
          ySum += event.input.estimateResult.histogram.y[j];
        }
        const percent =
          (event.input.estimateResult.samples.length - ySum) /
          event.input.estimateResult.samples.length;
        percents.push({ xPercent, percent });
      });

      const linerColorStops: string[] = ["rgb(33 150 243 / 1) 0%"];
      percents.forEach((p) => {
        linerColorStops.push(`rgb(33 150 243 / ${p.percent}) ${p.xPercent}%`);
      });
      const linearGradient = `linear-gradient(to bottom, ${linerColorStops.join(
        ", "
      )})`;

      // @ts-ignore
      return this.genEvent(event, scope, true, {
        staticClass: "v-event-timed",
        style: {
          top: `${top}px`,
          height: `${height}px`,
          left: `${left}%`,
          width: `${width}%`,
          background: `${linearGradient} !important`,
        },
      });
    },
    // heightに対するyPositionの割合を計算する
    calcPercentPosition(yPosition: number, height: number) {
      return (yPosition / height) * 100;
    },
  },
});
</script>
