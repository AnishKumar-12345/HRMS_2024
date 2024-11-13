<template>
    <v-card elevation="10" class="overflow-hidden">
      <v-card-item class="v-card-item bg-surface pt-4 pb-2">
        <v-tabs v-model="tab" bg-color="deep-purple-accent-4" color="primary" density="compact" grow>
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-card-item>
      
      <!-- Tab Content -->
      <v-card-text>
        <div v-if="tab === 'APPLY LEAVE'">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" lg="8">
              <Leaveui />
            </v-col>
            <v-col cols="12" lg="4">
              <Comingholidays />
            </v-col>
          </v-row>
        </div>
  
        <div v-else-if="tab === 'VIEW APPLIED LEAVES'">
          <v-row class="pa-0 ma-0">
            <v-col cols="12" lg="12">
              <Leavedetails />
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Leaveui from "@/components/ui-components/Leave/Leaveui.vue";
  import Comingholidays from "@/components/ui-components/Leave/Comingholidays.vue";
  import Leavedetails from "@/components/ui-components/Leave/Leavedetails.vue";
  
  const tab = ref('APPLY LEAVE');
  const items = ref(['APPLY LEAVE', 'VIEW APPLIED LEAVES']);
  </script>
  