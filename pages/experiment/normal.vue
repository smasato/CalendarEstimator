<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>通常カレンダー表示でのスケジューリング</h1>
            <p>
              このページでは、通常のカレンダー表示でのスケジューリングを行います。<br />
              それぞれのタスクに対して、所要時間見積もりと所要時間の入力をしてください。<br />
              詳細な説明はボタンをクリックすると表示されます。
            </p>
            <p>
              所要時間見積もりでの入力内容は所要時間の入力のステップでも表示されます。
            </p>
            <p>タスクAからタスクBの順に入力してください。</p>
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <v-row>
              <v-col>
                <h2>タスクAの所要時間見積もり</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-btn :disabled="taskA" @click="estimateTask(1)"
                  >所要時間見積もり</v-btn
                >
              </v-col>
              <v-col cols="auto">
                <v-btn :disabled="!taskA || eventA" @click="addEvent(1)"
                  >所要時間の入力</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col>
                <h2>タスクBの所要時間見積もり</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <v-btn :disabled="taskB" @click="estimateTask(2)"
                  >所要時間見積もり</v-btn
                >
              </v-col>
              <v-col cols="auto">
                <v-btn :disabled="!taskB || eventB" @click="addEvent(2)"
                  >所要時間の入力</v-btn
                >
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col>
                <EstimateForm
                  v-model="estimateForm"
                  :task-id="taskId"
                  @close-dialog="estimateForm = false"
                />
                <EventForm
                  v-model="eventForm"
                  :event-id="eventId"
                  @close-event-form="eventForm = false"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-container>
            <v-row>
              <v-col>
                <h2>スケジューリング</h2>
                <p>
                  タスクAとタスクBの所要時間の入力が完了すると、カレンダーの午前9時に表示されます。<br />
                </p>
                <p>
                  タスクA、タスクBの順にスケジューリングしてください。<br />
                  ただし、タスクAは午前9時から開始するものとします。<br />
                </p>
                <p>
                  次に、タスクAとタスクBを終わらせてタスクCに着手できる時刻について考えます。<br />
                  タスクCに着手できる時刻にあらかじめ18時に登録されているタスクCの予定を移動させてください。<br />
                  完了したら「次へ」をクリックしてください。
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <EventCalendar />
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              :disabled="!taskA || !taskB || !eventA || !eventB"
              @click="next"
              >次へ</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import EstimateForm from "~/components/EstimateForm.vue";
import EventForm from "~/components/EventForm.vue";
import EventCalendar from "~/components/EventCalendar.vue";

export default Vue.extend({
  name: "Normal",
  components: { EventForm, EstimateForm, EventCalendar },
  data: () => ({
    estimateForm: false,
    eventForm: false,
    taskId: -1,
    eventId: -1,
  }),
  head() {
    return {
      title: "Experiment (Normal)",
    };
  },
  computed: {
    taskA() {
      return (
        this.$accessor.task.tasks.find((task) => task.id === 1) !== undefined
      );
    },
    eventA() {
      return (
        this.$accessor.event.events.find((event) => event.id === 1) !==
        undefined
      );
    },
    taskB() {
      return (
        this.$accessor.task.tasks.find((task) => task.id === 2) !== undefined
      );
    },
    eventB() {
      return (
        this.$accessor.event.events.find((event) => event.id === 2) !==
        undefined
      );
    },
  },
  methods: {
    next() {
      this.$accessor.log.addLog({
        event: "end normal",
        timestamp: new Date(),
      });

      this.$router.push("/experiment/visualization");
    },
    estimateTask(taskId: number) {
      this.taskId = taskId;
      this.estimateForm = true;

      this.$accessor.log.addLog({
        event: `start estimating task ${taskId}`,
        timestamp: new Date(),
      });
    },
    addEvent(eventId: number) {
      this.eventId = eventId;
      this.eventForm = true;

      this.$accessor.log.addLog({
        event: `start adding event ${eventId}`,
        timestamp: new Date(),
      });
    },
  },
});
</script>
