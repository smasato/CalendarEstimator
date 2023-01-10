<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">
          2.
          所要時間が遅くなったり、速くなったりするようなサプライズイベントを考慮する
        </div>
      </v-col>
    </v-row>
    <v-row v-for="(surprise, index) in surprises" :key="index">
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

          <v-col cols="auto">
            <v-row align="baseline">
              <v-col cols="auto">
                <v-text-field
                  v-model="surprise.range[0]"
                  dense
                  min="0"
                  :max="surprise.range[1]"
                  type="number"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="auto">
                <p>から</p>
              </v-col>
              <v-col cols="auto">
                <v-text-field
                  v-model="surprise.range[1]"
                  dense
                  min="0"
                  max="200"
                  type="number"
                  hide-details
                  @input="updatedRangeUpper(index, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto">
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
          <v-col cols="auto">
            <v-text-field
              v-model="surprise.probability[1]"
              dense
              hide-details
              type="number"
              min="1"
              max="1000"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <span>回のうち</span>
          </v-col>

          <v-col cols="auto">
            <v-text-field
              v-model="surprise.probability[0]"
              dense
              hide-details
              type="number"
              min="0"
              max="1000"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
            <span>回 起こります</span>
          </v-col>
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
  },
  computed: {
    units() {
      const units = [] as { text: string; value: string }[];
      const unitsJa = ["分", "時間", "日"];
      this.$constants.UNITS.forEach((unit, index) => {
        units.push({
          text: unitsJa[index],
          value: unit,
        });
      });
      return units;
    },
    eventTypes() {
      const eventTypes = [] as { text: string; value: string }[];
      const eventTypesJa = ["遅くなる", "速くなる"];
      this.$constants.EVENT_TYPES.forEach((eventType, index) => {
        eventTypes.push({
          text: eventTypesJa[index],
          value: eventType,
        });
      });
      return eventTypes;
    },
  },
  mounted() {
    this.eventTypes = this.$constants.EVENT_TYPES;
  },
  methods: {
    updatedRangeUpper(index: number, event: any) {
      const temp = Number(event);
      if (this.surprises[index].range[0] > temp) {
        this.surprises[index].range[0] = temp;
      }
    },
  },
});
</script>
