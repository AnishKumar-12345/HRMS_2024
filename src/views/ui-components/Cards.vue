<script setup lang="ts">
import { ref } from "vue";

import UiChildCard from '@/components/shared/UiChildCard.vue';

import CardsProps from "@/components/ui-components/cards/CardsProps.vue";
import CardsSlots from "@/components/ui-components/cards/CardsSlots.vue";
import CardsContentWrap from "@/components/ui-components/cards/CardsContentWrap.vue";
import CardsMedia from "@/components/ui-components/cards/CardsMedia.vue";
import CardsWeather from "@/components/ui-components/cards/CardsWeather.vue";
import CardsTwitter from "@/components/ui-components/cards/CardsTwitter.vue";
</script>

<template>
  <v-row class="pa-0 ma-0">
    <v-col  cols="12" sm="12" lg="4" >
      <UiChildCard title="Attendance Stats">
        <CardsProps />
      </UiChildCard> 
    </v-col>
    <v-col cols="12" sm="12" lg="4" >
      <UiChildCard title="Timings" >
        <CardsSlots />
      </UiChildCard>
    </v-col>
    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <UiChildCard title="Actions">
        <CardsContentWrap />
      </UiChildCard>
    </v-col>

    <!-- <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <UiChildCard title="Card Media">
        <CardsMedia />
      </UiChildCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4" class="d-flex align-items-stretch">
      <UiChildCard title="Weather Card">
        <CardsWeather />
      </UiChildCard>
    </v-col>

    <v-col cols="12" sm="12" lg="4">
      <UiChildCard title="Twitter Card">
        <CardsTwitter />
      </UiChildCard>
    </v-col> -->
  </v-row>
</template>
