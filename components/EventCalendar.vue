<template>
  <v-container fluid>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :event-ripple="false"
        :events="events"
        :hide-header="true"
        color="primary"
        type="day"
        interval-minutes="15"
        :interval-count="(60 / 15) * 24"
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
};

export default Vue.extend({
  components: { CalendarEventNormal },
  data: (): DataType => {
    return {
      value: "",
      events: [] as Event[],
      dragEvent: null,
      dragStart: null,
      dragTime: null,
    };
  },
  mounted() {
    this.value = this.$constants.DEFAULT_DATE;
    this.fetchEvents();

    this.$store.subscribe((mutation) => {
      if (
        mutation.type === "event/updateEvent" ||
        mutation.type === "event/addEvent"
      ) {
        this.fetchEvents();
      }
    });
  },
  methods: {
    startDrag({ event, timed }) {
      if (event.fixed) return;

      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
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
    mouseMove(tms) {
      if (this.dragEvent && this.dragTime !== null) {
        const mouse = this.toTime(tms);
        // イベントの移動
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
      }
    },
    endDrag(tms) {
      if (this.dragEvent && this.dragTime !== null) {
        const mouse = this.toTime(tms);

        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = new Date(this.roundTime(newStartTime));
        const newEnd = new Date(newStart.getTime() + duration);
        const dragEvent = this.events.find(
          (events) => events.id === this.dragEvent.id
        );
        if (dragEvent) {
          const newEvent = {
            ...dragEvent,
            start: newStart,
            end: newEnd,
          };
          this.$accessor.event.updateEvent(newEvent);
        }
      }
      this.dragTime = null;
      this.dragEvent = null;
    },
    cancelDrag() {
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 1; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
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
