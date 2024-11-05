<template>
    <v-row class="pa-0 ma-0">
      <!-- Leave Management and Team Availability Section -->
      <v-col cols="12" lg="9">
        <Leaveui />
      </v-col>
      
      <!-- Coming Holidays Section -->
      <v-col cols="12" lg="3">
        <Comingholidays />
      </v-col>

      <v-col cols="12" lg="12">
        <Leavedetails />
      </v-col>

    </v-row>
  </template>
  
  <script setup lang="ts">
  import Leaveui from "@/components/ui-components/Leave/Leaveui.vue";
  import Comingholidays from "@/components/ui-components/Leave/Comingholidays.vue";
  import Leavedetails from "@/components/ui-components/Leave/Leavedetails.vue";
  </script>
  