<template>
  <v-card elevation="0" class="p-0 m-0">
    <v-card-item class="pa-0 m-0">
      <template v-slot:subtitle>
        <div class="d-flex align-center justify-between">
          <v-btn icon @click="prevDays" :disabled="startIndex === 0">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-row
            dense
            no-gutters
            class="d-flex align-center justify-center flex-nowrap"
            style="max-width: 80%; overflow: hidden;"
          >
            <v-col
              v-for="(day, index) in visibleDays"
              :key="index"
              class="text-center pa-0 ma-0"
            >
              <v-btn
                icon
                small
                text
                class="pa-0 ma-1"
                :color="isCurrentDay(day) ? 'primary' : ''"
                @click="handleDayClick(day)"
              >
                <span class="text-caption">{{ day[0] }}</span>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn icon @click="nextDays" :disabled="startIndex + daysToShow >= days.length">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
    </v-card-item>
    <v-card-text class="py-0 pa-1 ma-0">
      <div style="height: 55px;">
        <div class="text-caption">
          Today (9 AM - 7 PM)
        </div> 
        <v-slider
          v-model="sliderValue"
          thumb-label="always"
          max="600" 
          color="primary"
          step="1"
          @change="updateSlider"
        >
          <template v-slot:thumb-label="{ modelValue }">
            {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 60 * 10), 9)] }} <!-- Emojis based on time worked -->
          </template>         
        </v-slider>      
      </div>
      <div class=" m-0 p-0">
        <span>Duration: 9:00 hrs</span>
        <span class="pl-14">Break: 1:00 hr</span>
      </div>
    
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { format } from 'date-fns';

const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
const currentDay = format(new Date(), 'EEEE');

const daysToShow = 3;
const startIndex = ref(0);
const sliderValue = ref(0);
const satisfactionEmojis = ref([ '😍','😄', '😁', '😊', '🙂', '😐', '🙁', '☹️', '😢','😭']);

const visibleDays = computed(() => {
  return days.value.slice(startIndex.value, startIndex.value + daysToShow);
});

// Function to update the slider based on the current time
const updateSlider = () => {
  const now = new Date();
  const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0); // 9 AM
  const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0); // 7 PM

  if (now < startTime) {
    sliderValue.value = 0; // Before work starts
  } else if (now > endTime) {
    sliderValue.value = 600; // After work ends
  } else {
    const minutesWorked = Math.floor((now - startTime) / 1000 / 60); // Calculate minutes worked
    sliderValue.value = Math.min(minutesWorked, 600); // Ensure it doesn't exceed 600 minutes
  }
};

// Automatically update the slider every minute
const startLiveUpdate = () => {
  updateSlider(); // Set initial value
  setInterval(updateSlider, 60000); // Update every minute
};

onMounted(() => {
  startLiveUpdate();
});

const handleDayClick = (day) => {
  console.log(`${day} clicked`);
};

const isCurrentDay = (day) => day === currentDay;

const prevDays = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
};

const nextDays = () => {
  if (startIndex.value + daysToShow < days.value.length) {
    startIndex.value += 1;
  }
};
</script>

<style scoped>
.v-card {
  overflow: hidden;
}
</style>
