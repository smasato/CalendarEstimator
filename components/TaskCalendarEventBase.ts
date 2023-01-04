import { VCalendar } from "vuetify/lib";
import { isEventHiddenOn } from "vuetify/lib/components/VCalendar/util/events";
import {
  getDayIdentifier,
  MINUTES_IN_DAY,
} from "vuetify/lib/components/VCalendar/util/timestamp";

export default VCalendar.extend({
  name: "TaskCalendarEventBase",
  props: {
    eventTextColor: {
      type: Function,
      default: (event: any) => {
        return event.type === "task" ? "black" : "white";
      },
    },
  },
  methods: {
    // heightに対するyPositionの割合を計算する
    calcPercentPosition(yPosition: number, height: number) {
      return (yPosition / height) * 100;
    },
    genTimedEventOriginal({ event, left, width }, day) {
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
      // @ts-ignore
      return this.genEvent(event, scope, true, {
        staticClass: "v-event-timed",
        style: {
          top: `${top}px`,
          height: `${height}px`,
          left: `${left}%`,
          width: `${width}%`,
        },
      });
    },
  },
});
