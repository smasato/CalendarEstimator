<template>
  <div>
    <div class="v-event-draggable">
      <component :is="{ render: eventSummary }"></component>
    </div>
    <div
      v-if="event.timed"
      class="v-event-drag-bottom"
      @mousedown.stop="$emit('event-mousedown', event)"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { Event } from "~/types/event"; FIXME: module not resolved

export default Vue.extend({
  name: "CalendarEventNormal",
  props: {
    event: {
      type: Object, // FIXME: Event,
      required: true,
    },
    eventSummary: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
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
