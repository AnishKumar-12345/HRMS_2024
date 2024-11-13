<template>
    <v-card elevation="1">
        <v-card-title class="text-h6">
            Coming Public Holidays
        </v-card-title>
        <v-card-text>
            <template v-if="currentMonthHolidays.length > 0">
                <v-list>
                    <v-list-item v-for="holiday in currentMonthHolidays" :key="holiday.date">
                        <v-list-item-content>
                            <v-list-item-title>{{ holiday.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ formatDate(holiday.date) }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </template>
            <template v-else>
                <v-alert type="info" dismissible>
                    No holidays available for this month.
                </v-alert>
            </template>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { format } from 'date-fns';

// Example list of Indian public holidays
const holidays = ref([
    { name: 'New Year', date: '2024-01-01' },
    { name: 'Republic Day', date: '2024-01-26' },
    { name: 'Holi', date: '2024-03-25' },
    { name: 'Independence Day', date: '2024-08-15' },
    { name: 'Gandhi Jayanti', date: '2024-10-02' },
    { name: 'Diwali', date: '2024-10-31' },
    { name: 'Christmas', date: '2024-12-25'}
    // Add more holidays as needed
]);

// Function to format date
const formatDate = (date: string) => {
    return format(new Date(date), 'MMMM d, yyyy');
};

// Get the current month
const currentMonth = new Date().getMonth();

// Computed property to filter holidays in the current month
const currentMonthHolidays = computed(() => {
    return holidays.value.filter((holiday) => {
        return new Date(holiday.date).getMonth() === currentMonth;
    });
});
</script>
