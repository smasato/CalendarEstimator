<template>
  <div>
    <div class="v-event-draggable">
      <div class="v-event-summary">
        <strong>{{ event.name }}</strong
        >, {{ timeSummary() }}
        <p class="mb-0">min: {{ estimateResult.min }} minutes</p>
        <p class="mb-0">max: {{ estimateResult.max }} minutes</p>
      </div>
    </div>
    <div v-if="event.timed" class="v-event-drag-bottom"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EstimateResult } from "~/plugins/estimate";
import { Task } from "~/types/task";

export default Vue.extend({
  name: "CalendarEventGradation",
  props: {
    event: {
      type: Object as () => Task,
      required: true,
    },
    timeSummary: {
      type: Function,
      required: true,
    },
    estimateResult: {
      type: Object as () => EstimateResult,
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
