<template>
  <v-app>
    <Header />

    <v-main>
      <EstimateForm
        v-model="estimateForm"
        @close-dialog="estimateForm = false"
      />
      <EventForm v-model="eventForm" @close-event-form="eventForm = false" />
      <v-container fluid style="height: calc(100vh - 64px)">
        <v-row>
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
            <v-row>
              <v-col align="center">
                <div @click="$router.push('/experiment/start')">
                  <v-btn x-large rounded>
                    実験開始 <v-icon small>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="9">
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
