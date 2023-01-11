<template>
  <v-container fluid style="height: 89vh">
    <v-sheet width="50%" height="100%" class="overflow-y-auto">
      <v-calendar
        ref="calendar"
        v-model="value"
        :event-color="getEventColor"
        :event-ripple="false"
        :events="events"
        :hide-header="true"
        color="primary"
        type="day"
        first-time="8:00"
        interval-minutes="15"
        :interval-count="(60 / 15) * 12"
        @change="fetchEvents"
        @mousedown:event="startDrag"
        @mousedown:time="startTime"
        @mousemove:time="mouseMove"
        @mouseup:time="endDrag"
        @mouseleave.native="cancelDrag"
      >
        <template #event="{ event, timed, eventSummary }">
          <CalendarEventNormal
            :event-summary="eventSummary"
            :timed="timed"
            :event="event"
            @event-mousedown="extendBottom(event)"
          ></CalendarEventNormal>
        </template>
      </v-calendar>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Event } from "~/types/event";
import CalendarEventNormal from "~/components/CalendarEventNormal.vue";

export type DataType = {
  value: string;
  events: Event[];
  dragEvent: any | null;
  dragStart: any | null;
  dragTime: any | null;
  createEvent: any | null;
  createStart: any | null;
  extendOriginal: any | null;
};

export default Vue.extend({
  components: { CalendarEventNormal },
  data: (): DataType => {
    return {
      value: "",
      events: [],
      dragEvent: null,
      dragStart: null,
      dragTime: null,
      createEvent: null,
      createStart: null,
      extendOriginal: null,
    };
  },
  mounted() {
    this.value = dayjs(this.$constants.DEFAULT_DATE).format("YYYY-MM-DD");
    this.$store.watch(
      (state) => state.event.events,
      (events) => {
        this.events = events;
      }
    );
  },
  methods: {
    startDrag({ event, timed }) {
      if (event.fixed) return;

      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    startTime(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;

        this.dragTime = mouse - start;
      }
    },
    extendBottom(event) {
      if (event.fixed === true) return;

      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        // イベントの移動
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = new Date(this.roundTime(newStartTime));
        const newEnd = new Date(newStart.getTime() + duration);

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);

        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag(tms) {
      const mouse = this.toTime(tms);

      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = new Date(this.roundTime(newStartTime));
        const newEnd = new Date(newStart.getTime() + duration);
        const newEvent = {
          ...this.dragEvent,
          start: newStart,
          end: newEnd,
        };
        this.$accessor.event.updateEvent(newEvent);
      } else if (this.createEvent && this.createStart !== null) {
        const start = this.createEvent.start;
        const end = this.createEvent.end;
        const duration = end - start;
        const newStart = new Date(this.roundTime(start));
        const newEnd = new Date(newStart.getTime() + duration);

        const newEvent = {
          ...this.createEvent,
          start: newStart,
          end: newEnd,
        };
        this.$accessor.event.updateEvent(newEvent);
      }
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    getEventColor(event: Event) {
      return event.color;
    },
    fetchEvents() {
      const events = [] as Event[];

      const startDay = dayjs(this.value).startOf("day");
      const endDay = dayjs(this.value).endOf("day");

      this.$accessor.event.events.forEach((event) => {
        const eventStart = dayjs(event.start);
        const eventEnd = dayjs(event.end);
        if (eventStart >= startDay && eventEnd <= endDay) {
          const newEvent: Event = {
            ...event,
          };
          events.push(newEvent);
        }
      });
      this.events = events;
    },
  },
});
</script>
