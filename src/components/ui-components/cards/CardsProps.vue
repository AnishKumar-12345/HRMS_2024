<script setup lang="ts"></script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Props -->
  <!-- ----------------------------------------------------------------------------- -->
  <v-card elevation="0" class="p-0 m-0">&nbsp;
  <v-card-item title="This week" class="pa-0 ma-0">
    <template v-slot:subtitle>
      <v-row class="d-flex py-2 justify-space-between align-center no-gutters dense">
        <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0"></v-col>
        <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
          <div class="text-center">
            <div class="mb-1">Avg hrs/day</div>
          </div>
        </v-col>
        <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
          <div class="text-center">
            <div class="mb-1">Ontime</div>
          </div>
        </v-col>
      </v-row>
    </template>
  </v-card-item>

  <v-card-text class="py-0 pa-0 ma-0">
    <v-row class="d-flex justify-space-between align-center no-gutters dense">
      <v-col cols="4" sm="4" lg="4">
        <v-icon icon="mdi-account-circle"
        size="25"
          color="warning"
          class="p-2"
        >
        </v-icon>
        <span class="ml-2">Me</span>
      </v-col>
      <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
        <div class="text-center">5.46 hrs</div>
      </v-col>
      <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
        <div class="text-center">98%</div>
      </v-col>
      <v-col cols="4" sm="4" lg="4">
        <v-icon icon="mdi-account-group"
        size="22"
          color="primary"
         class="p-2"
        >
        </v-icon>
        <span class="ml-2">Team</span>
      </v-col>
      <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
        <div class="text-center">6.23 hrs</div>
      </v-col>
      <v-col cols="4" sm="4" lg="4" class="pa-0 ma-0">
        <div class="text-center">74%</div>
      </v-col>
    </v-row>
  </v-card-text>
</v-card>

</template>
