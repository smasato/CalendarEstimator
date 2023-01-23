<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <v-row>
          <v-container>
            <v-row>
              <v-col v-if="participants[0]">
                {{ participants[0].experiment.id }}
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <TaskCalendar
                  :participant="participants[0]"
                  style="height: 4608px"
                />
              </v-col>
              <v-col cols="3">
                <EventCalendar
                  :participant="participants[0]"
                  style="height: 4608px"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import EventCalendar from "~/components/EventCalendar.vue";
import TaskCalendar from "~/components/TaskCalendar.vue";

export default Vue.extend({
  name: "Index",
  components: { EventCalendar, TaskCalendar },
  data: () => ({
    estimateForm: false,
    eventForm: false,
    mode: "normal",
    participants: [],
  }),
  mounted() {
    this.participants = this.$accessor.participants.participants;
  },
});
</script>
