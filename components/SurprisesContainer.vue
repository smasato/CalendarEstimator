<template>
  <v-container>
    <v-row>
      <div class="text-h5">
        2. Consider surprise events which could slow you down or speed you up
      </div>
    </v-row>
    <div v-for="(suprise, index) in suprises">
      <v-container>
        <v-row align="center">
          <span>{{ index + 1 }}.</span>
          <v-col cols="3">
            <v-text-field
              v-model="suprise.name"
              label="Name (Optional)"
            ></v-text-field>
          </v-col>

          <v-col cols="3">
            <v-row>
              <v-range-slider
                hide-details
                v-model="suprise.range"
              ></v-range-slider>
            </v-row>
            <v-row>
              <span>
                from {{ suprise.range[0] }} to {{ suprise.range[1] }}
                {{ suprise.unit }}
              </span>
            </v-row>
          </v-col>

          <v-col cols="2">
            <v-select
              hide-details
              v-model="suprise.unit"
              :items="units"
            ></v-select>
          </v-col>

          <v-col cols="2">
            <v-select
              hide-details
              v-model="suprise.eventType"
              :items="eventTypes"
            ></v-select>
          </v-col>

          <v-col cols="1">
            <v-row>
              <v-btn x-small @click="insertSuprise(index)">+</v-btn>
              <v-btn x-small @click="removesuprise(index)">X</v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row align="center">
          <span>it happens</span>
          <v-col cols="auto">
            <v-text-field
              type="number"
              min="0"
              max="1000"
              v-model="suprise.probability[0]"
            ></v-text-field>
          </v-col>
          <v-col cols="auto">
            <p>time(s) out of</p>
          </v-col>

          <v-col cols="auto">
            <v-text-field
              type="number"
              min="1"
              max="1000"
              v-model="suprise.probability[1]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      suprises: [
        {
          name: "",
          range: [0, 10],
          unit: "minute(s)",
          eventType: "slower",
          probability: [0, 1],
        },
      ],
      units: [],
      eventTypes: [],
    };
  },
  methods: {
    insertSuprise(index) {
      this.suprises.splice(index + 1, 0, {
        name: "",
        range: [0, 10],
        unit: "minute(s)",
        eventType: "slower",
        probability: [0, 1],
      });
    },
    removesuprise(index) {
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
