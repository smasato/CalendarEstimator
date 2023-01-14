<template>
  <v-app>
    <Header />

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3">
            <EventCalendar />
          </v-col>
          <v-col cols="3">
            <TaskCalendar />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
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
  }),
});
</script>
