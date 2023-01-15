<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <h1>実験終了</h1>
            <p>
              以上で実験は終了です。<br />
              お疲れ様でした。
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="$router.push('/experiment/download')"
              >ダウンロード
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "End",
  head() {
    return {
      title: "Experiment End",
    };
  },
});
</script>
