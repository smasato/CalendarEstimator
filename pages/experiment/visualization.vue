<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>予測的可視化カレンダー表示でのスケジューリング</h1>
            <p>
              このページでは、予測的可視化カレンダー表示でのスケジューリングを行います。
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <v-row>
              <v-col>
                <h2>スケジューリング</h2>
                <p>
                  さきほど入力した所要時間見積もりにもとづいて以下のカレンダーに表示されています。
                  このカレンダー表示では、青色が濃いほどその時刻にタスクが継続している確率が高いことを示しています。
                </p>
                <p>
                  タスクAとタスクBを終わらせてタスクCに着手できる時刻について考えます。
                </p>
                <p>
                  タスクCに着手できる時刻にあらかじめ18時に登録されているタスクCの予定を移動させてください。
                  完了したら「次へ」をクリックしてください。
                </p>
              </v-col>
            </v-row>
            <v-row>
              <TaskCalendar />
            </v-row>
          </v-container>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$router.push('/experiment/end')">次へ</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TaskCalendar from "~/components/TaskCalendar.vue";
export default Vue.extend({
  name: "Visualization",
  components: {
    TaskCalendar,
  },
  head() {
    return {
      title: "Experiment (Visualization)",
    };
  },
});
</script>
