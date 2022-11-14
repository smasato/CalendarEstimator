<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5">
          2. Consider surprise events which could slow you down or speed you up
        </div>
      </v-col>
    </v-row>
    <v-row v-for="(suprise, index) in suprises" v-bind:key="index">
      <v-col cols="11">
        <v-row align="baseline">
          <v-col cols="auto">
            <span>{{ index + 1 }}.</span>
          </v-col>

          <v-col cols="4">
            <v-text-field
              v-model="suprise.name"
              label="Name (Optional)"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="3" class="flex-shrink-0 flex-grow-1">
            <v-row align="baseline">
              <v-col cols="3" class="flex-shrink-1 flex-grow-0">
                <p>from</p>
              </v-col>
              <v-col cols="3" class="flex-shrink-0 flex-grow-1">
                <v-text-field
                  dense
                  max="200"
                  v-model="suprise.range[0]"
                  type="number"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="flex-shrink-1 flex-grow-0">
                <p>to</p>
              </v-col>
              <v-col cols="3" class="flex-shrink-0 flex-grow-1">
                <v-text-field
                  dense
                  min="1"
                  max="200"
                  v-model="suprise.range[1]"
                  type="number"
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" class="flex-shrink-1 flex-grow-0">
            <v-select
              hide-details
              v-model="suprise.unit"
              :items="units"
            ></v-select>
          </v-col>
          <v-col cols="2" class="flex-shrink-1 flex-grow-0">
            <v-select
              hide-details
              v-model="suprise.eventType"
              :items="eventTypes"
            ></v-select
          ></v-col>
        </v-row>
        <v-row align="baseline" class="mt-n4">
          <v-col cols="auto">
            <span>it happens</span>
          </v-col>
          <v-col cols="auto">
            <v-text-field
              dense
              hide-details
              type="number"
              min="0"
              max="1000"
              v-model="suprise.probability[0]"
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <span>time(s) out of</span>
          </v-col>

          <v-col cols="auto">
            <v-text-field
              dense
              hide-details
              type="number"
              min="1"
              max="1000"
              v-model="suprise.probability[1]"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <v-row>
          <v-btn x-small @click="insertSuprise(index)">+</v-btn>
          <v-btn x-small @click="removesuprise(index)">X</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Surprise } from "~/types";

export default Vue.extend({
  props: {
    suprises: {
      type: Array as () => Surprise[],
      required: true,
    },
  },
  data() {
    return {
      units: [],
      eventTypes: [],
    };
  },
  methods: {
    insertSuprise(index: number) {
      this.suprises.splice(index + 1, 0, {
        name: "",
        range: [0, 10],
        unit: "minute(s)",
        eventType: "slower",
        probability: [0, 1],
      } as Surprise);
    },
    removesuprise(index: number) {
      if (this.suprises.length > 1) {
        this.suprises.splice(index, 1);
      }
    },
  },
  mounted() {
    // @ts-ignore
    const constants = this.$constants;
    this.units = constants.units;
    this.eventTypes = constants.eventTypes;
  },
});
</script>
