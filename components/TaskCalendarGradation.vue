<script lang="ts">
import { VCalendar } from "vuetify/lib";
import { isEventHiddenOn } from "vuetify/lib/components/VCalendar/util/events";
import {
  getDayIdentifier,
  parseDate,
  MINUTES_IN_DAY,
} from "vuetify/lib/components/VCalendar/util/timestamp";
import dayjs from "dayjs";

export default VCalendar.extend({
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
      const minDate = parseDate(
        dayjs(event.input.start)
          .add(event.input.estimateResult.min, "minute")
          .toDate()
      );
      const minTop = day.timeToY(minDate);
      const minPercent = this.calcPercentPosition(minTop - top, height);

      const percents = [];
      event.input.estimateResult.histogram.x.forEach((x, i) => {
        const y = event.input.estimateResult.histogram.y[i];
        const xDate = parseDate(
          dayjs(event.input.start).add(x, "minute").toDate()
        );
        const xTop = day.timeToY(xDate);
        const xPercent = this.calcPercentPosition(xTop - top, height);
        const ySum = event.input.estimateResult.histogram.y
          .slice(0, i + 1)
          .reduce((a, b) => a + b, 0);
        console.log(ySum);
        const percent = y / event.input.estimateResult.samples.length;
        percents.push({ xPercent, percent });
      });
      percents[0].percent = 1;
      console.log(percents);
      const background = [];
      percents.forEach((p) => {
        background.push(`rgb(33 150 243 / ${p.percent}) ${p.xPercent}%`);
      });

      console.log(
        `linear-gradient(to bottom, ${background.join(", ")} !important)`
      );
      // @ts-ignore
      return this.genEvent(event, scope, true, {
        staticClass: "v-event-timed",
        style: {
          top: `${top}px`,
          height: `${height}px`,
          left: `${left}%`,
          width: `${width}%`,
          background: `linear-gradient(to bottom, ${background.join(
            ", "
          )}) !important`,
          // background: `linear-gradient(to bottom, rgb(33 150 243 / 100%) ${minPercent}%, rgb(33 150 243 / 0%) 100%) !important`,
        },
      });
    },
    calcPercentPosition(yPosition, height) {
      return (yPosition / height) * 100;
    },
  },
});
</script>
