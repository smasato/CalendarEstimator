<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">
          2.
          所要時間が遅くなったり、速くなったりするようなサプライズイベントを考慮する
        </div>
        <p>
          タスクを実行する際に、所要時間が遅くなったり、速くなったりするようなサプライズイベントが発生することがあります。<br />
          このようなサプライズイベントを考慮して、タスクの所要時間を見積もると、より正確な所要時間見積もりが可能になります。<br />
        </p>
        <p v-if="!readOnly">
          ここではあらかじめ入力されたそれぞれのサプライズイベントについて、発生確率とそのときの影響時間の範囲を入力してください。<br />
          サプライズイベントが起きない場合は、発生確率を「1回のうち0回」に設定してください。
        </p>
      </v-col>
    </v-row>
    <v-row v-for="(surprise, index) in localSurprises" :key="index">
      <v-col cols="12">
        <v-row align="baseline">
          <v-col cols="auto">
            <span>{{ index + 1 }}.</span>
          </v-col>

          <v-col cols="4">
            <v-text-field
              v-model="surprise.name"
              label="サプライズイベント名"
              disabled
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-row align="baseline">
              <v-col cols="4">
                <v-text-field
                  v-model.number="surprise.range[0]"
                  dense
                  min="0"
                  :max="surprise.range[1]"
                  type="number"
                  label="最短"
                  hint="0以上の整数を入力"
                  :readonly="readOnly"
                ></v-text-field>
              </v-col>
              <v-col cols="auto">
                <p>から</p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model.number="surprise.range[1]"
                  dense
                  min="0"
                  max="200"
                  type="number"
                  label="最長"
                  hint="最短時間以上の整数を入力"
                  :readonly="readOnly"
                  @blur="updatedRangeUpper(index)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="1">
            <v-select
              v-model="surprise.unit"
              hide-details
              disabled
              :items="units"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="surprise.eventType"
              hide-details
              disabled
              :items="eventTypes"
            ></v-select
          ></v-col>
        </v-row>
        <v-row align="baseline" class="mt-n4">
          <v-col cols="1">
            <v-text-field
              v-model.number="surprise.probability[1]"
              :error="surprise.probability[1] === 0"
              hint="1以上の整数を入力"
              type="number"
              min="1"
              max="1000"
              suffix="回"
              :readonly="readOnly"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <span>のうち</span>
          </v-col>

          <v-col cols="1">
            <v-text-field
              v-model.number="surprise.probability[0]"
              hint="0以上の整数を入力"
              type="number"
              min="0"
              max="1000"
              :readonly="readOnly"
              suffix="回"
              @blur="updatedProbability(index)"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <span>起こる</span>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Surprise } from "~/types/task";

export default Vue.extend({
  props: {
    surprises: {
      type: Array as () => Surprise[],
      required: true,
    },
    readOnly: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      localSurprises: this.surprises,
    };
  },
  computed: {
    units() {
      return this.$constants.UNITS;
    },
    eventTypes() {
      return this.$constants.EVENT_TYPES;
    },
  },
  watch: {
    localSurprises: {
      handler() {
        this.$emit("update:surprises", this.localSurprises);
      },
      deep: true,
    },
    surprises: {
      handler() {
        this.localSurprises = this.surprises;
      },
      deep: true,
    },
  },
  methods: {
    updatedRangeUpper(index: number) {
      if (
        this.localSurprises[index].range[0] >
        this.localSurprises[index].range[1]
      ) {
        this.localSurprises[index].range = [
          this.localSurprises[index].range[1],
          this.localSurprises[index].range[0],
        ];
      }
    },
    updatedProbability(index: number) {
      if (
        this.localSurprises[index].probability[0] >
        this.localSurprises[index].probability[1]
      ) {
        this.localSurprises[index].probability = [
          this.localSurprises[index].probability[1],
          this.localSurprises[index].probability[1],
        ];
      }
    },
  },
});
</script>
