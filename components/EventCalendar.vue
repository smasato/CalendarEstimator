<template>
  <v-container>
    <v-sheet height="64">
      <v-toolbar flat>
        <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday"
          >今日</v-btn
        >
        <v-btn fab text small color="grey darken-2" @click="prev">
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab text small color="grey darken-2" @click="next">
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-toolbar-title v-if="$refs.calendar">{{
          $refs.calendar.title
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-sheet>
    <v-sheet width="50%">
      <v-calendar
        ref="calendar"
        v-model="value"
        color="primary"
        type="day"
        :events="events"
        :event-color="getEventColor"
        :event-ripple="false"
        @change="fetchEvents"
        @mousedown:event="startDrag"
        @mousedown:time="startTime"
        @mousemove:time="mouseMove"
        @mouseup:time="endDrag"
        @mouseleave.native="cancelDrag"
      >
        <template #event="{ event, timed, eventSummary }">
          <div class="v-event-draggable">
            <component :is="{ render: eventSummary }"></component>
          </div>
          <div
            v-if="timed"
            class="v-event-drag-bottom"
            @mousedown.stop="extendBottom(event)"
          ></div>
        </template>
      </v-calendar>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import { Event } from "~/types/event";

export default Vue.extend({
  data: () => ({
    value: dayjs().format("YYYY-MM-DD"),
    events: [] as Event[],
    dragEvent: null as any,
    dragStart: null as any,
    dragTime: null as any,
    createEvent: null as any,
    createStart: null as any,
    extendOriginal: null as any,
  }),
  mounted() {
    this.$store.watch(
      (state) => state.event.events,
      (events) => {
        this.events = events;
      }
    );
  },
  methods: {
    startDrag({ event, timed }) {
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
    setToday() {
      this.value = dayjs().format("YYYY-MM-DD");
    },
    prev() {
      // @ts-ignore
      this.$refs.calendar.prev();
    },
    next() {
      // @ts-ignore
      this.$refs.calendar.next();
    },
    // @ts-ignore
    fetchEvents(to?: any) {
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

<style lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: "";
  }

  &:hover::after {
    display: block;
  }
}
</style>
