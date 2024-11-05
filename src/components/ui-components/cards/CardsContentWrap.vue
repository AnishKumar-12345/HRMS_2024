<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref<string>('00:00:00');
const currentDate = ref<string>('');
const clockout = ref(false);
let timerInterval: ReturnType<typeof setInterval> | null = null;

// Function to update the time and date
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  currentDate.value = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
};

// Function to handle clock-in action
const handleClockIn = () => {
  console.log('Clock-in button clicked!');
  clockout.value = true;
  updateTime(); // Initialize time and date display
  
  timerInterval = setInterval(updateTime, 1000); // Start updating every second
};

const handleClockOut = () => {
  console.log('Clock-out button clicked!');
  clockout.value = false;
  
  if (timerInterval) {
    clearInterval(timerInterval); // Stop updating
    timerInterval = null;
  }
  currentTime.value = '00:00:00'; // Reset time display
};

onMounted(() => {
  currentDate.value = new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval); // Clear interval on component unmount
});
</script>

<template>
  <v-card elevation="0" class="p-0 m-0"> 
    <v-card-text class="py-0 pa-0 ma-0">
      <v-row>
        <v-col cols="6" sm="6" lg="6" class="d-flex flex-column align-center">
          <div class="text-h3">{{ currentTime }}</div> <!-- Time Display with Big Letters -->
          <div class="text-caption">{{ currentDate }}</div> <!-- Date Display -->
        </v-col>
        <v-col cols="6" sm="6" lg="6">
          <v-btn color="primary" @click="handleClockIn" variant="flat" v-if="!clockout">
            Web CheckIn
          </v-btn>
          <v-btn color="error" @click="handleClockOut" variant="flat" v-if="clockout">
            Web CheckOut
          </v-btn>
          <div class="p-3 m-3 mt-3">
            <span><a href="" class="text-decoration-none text--blue">Remote Clock-in</a></span><br>
            <span><a href="" class="text-decoration-none" color="primary">Work From Home</a></span>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.text-h1 {
  font-size: 1rem; /* Adjust size as needed */
  font-weight: normal;
}
</style>
