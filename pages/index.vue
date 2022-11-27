<template>
  <v-app>
    <Header />

    <v-main>
      <v-container fluid>
        <EstimateForm
          v-model="estimateForm"
          @close-dialog="estimateForm = false"
        />
        <EventForm v-model="eventForm" @close-event-form="eventForm = false" />
        <v-row class="fill-height">
          <v-col cols="3">
            <v-row>
              <v-col align="center">
                <v-btn-toggle v-model="mode">
                  <v-btn value="normal"> Normal </v-btn>
                  <v-btn value="estimate"> Estimate </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <div @click="clickCreate">
                  <v-btn x-large rounded>
                    作成 <v-icon small>mdi-chevron-down</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <EventCalendar v-if="mode === 'normal'" />
            <TaskCalendar v-else />
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
import EstimateForm from "~/components/EstimateForm.vue";
import EventForm from "~/components/EventForm.vue";

export default Vue.extend({
  components: { EventCalendar, TaskCalendar, EstimateForm, EventForm },
  data: () => ({
    estimateForm: false,
    eventForm: false,
    mode: "normal",
  }),
  methods: {
    clickCreate() {
      if (this.mode === "normal") {
        this.eventForm = true;
      } else {
        this.estimateForm = true;
      }
    },
  },
});
</script>
