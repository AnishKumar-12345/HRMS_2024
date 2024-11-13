<template>
     <v-card elevation="1" class="mt-2">
        <v-card-text>
            <v-data-table
            :headers="headers"
            :items="Leave_data"
            height="400px"
            fixed-header 
            :items-per-page="10" 
             density="compact"
             :search="search"
            >
            <template v-slot:top>
                <v-toolbar prominent dark style="background-color: rgb(255, 255, 255)">
                    <v-toolbar-title>
                        <template v-slot:text>
                            <v-text-field
                                v-model="search"
                                label="Search"
                                prepend-inner-icon="mdi-magnify"
                                variant="outlined"
                                hide-details
                                single-line
                            ></v-text-field>
                        </template>
                    </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    </v-toolbar>
                    </template>              
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
const search = ref(null);

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
            Leave_data.value = response.data.reverse();
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