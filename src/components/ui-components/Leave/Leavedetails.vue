<template>
     <v-card elevation="0" class="mt-2">
        <v-card-text>
            <v-data-table
            :headers="headers"
            :items="Leave_data"
            >
            <template v-slot:item.leave_status="{ item }">
               <v-chip :color="item.leave_status == 'Pending' ? 'error' : 'success'">{{ item.leave_status }}</v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon class="me-2 icon-hover" size="small" color="info" @click="editicon"> mdi-pencil </v-icon>
                <v-icon class="icon-hover" size="small" color="error" @click="deleteicon"> mdi-delete </v-icon>
            </template>
            </v-data-table>
        </v-card-text>
    </v-card>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" top :timeout="1000">
            {{ snackbar.message }}
        </v-snackbar>
</template>

<script setup lang="ts">
import { useHRMSDataStore } from '../../../store/apistore';
import { ref, computed, watch, nextTick, onMounted, onBeforeMount } from 'vue';
const Getleave = useHRMSDataStore();

const headers = [
{ title: 'Employee Name', key: 'emp_id' },
    { title: 'Applied Date', key: 'applied_date' },
    { title: 'Leave Request Dates', key: 'leave_request_dates' },
    { title: 'Leave Status', key: 'leave_status' },
    { title: 'Reason', key: 'reason'},
    { title: 'action', key: 'actions'},
]

const snackbar = ref({
    show: false,
    message: '',
    color: ''
});
const Leave_data = ref(['']);
const userID = ref("");

onBeforeMount(() => {
    userID.value = localStorage.getItem('HRMSuserID') || '';
    Getleave.getLeavesdata(userID.value).then((response) => {
        // console.log({response});
        if (response.status == 1) {
            Leave_data.value = response.data;
                snackbar.value = {
                    show: true,
                    message: response.message,
                    color: 'primary'
                };                
            } else {
                snackbar.value = {
                    show: true,
                    message: response.message,
                    color: 'error'
                };
            }
        })
        .catch((err) => console.log('errors', err));
   
});

const editicon = () => {

}
const deleteicon = () => {
    
}
</script>