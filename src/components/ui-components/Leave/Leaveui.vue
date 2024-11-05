<template>
   <v-row>
    <v-col md="8">
        <v-card elevation="0" class="p-0 m-0">
        <v-card-text class="py-2 pa-2 ma-2">
            <v-row>
                <v-col cols="6" sm="6" lg="6" class="d-flex flex-column align-center">
                    <h2>Leave Management</h2>
                </v-col>
                <v-col cols="6" sm="6" lg="6" class="text-right">
                    <v-btn color="error" size="small" dark variant="flat" append-icon="mdi-account-circle" @click="onpointerleave()">
                        Request a Leave
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>

    <v-card elevation="0" class="mt-2">
        <v-card-text class="py-2 pa-2 ma-2">
            <v-row>
                <v-col cols="12" md="4" sm="12">
                    <apexchart type="donut" height="200" :options="chartOptions" :series="Chart">
                    </apexchart>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <apexchart type="donut" height="200" :options="chartOptions2" :series="Chart2">
                    </apexchart>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                    <apexchart type="donut" height="200" :options="chartOptions3" :series="Chart3">
                    </apexchart>
                </v-col>
            </v-row>           
            </v-card-text>
    </v-card>
   
    </v-col>
   
    <v-col >
        <v-card elevation="0">
            <v-card-title class="text-h5">Team Availability</v-card-title>
            <v-card-text>

            </v-card-text>
        </v-card>
    </v-col>   
   </v-row>
  

    <v-dialog v-model="dialog" max-width="800" persistent>
        <v-card elevation="10" class="overflow-hidden">
            <v-card-item class="py-4 px-6">
                <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
            </v-card-item>
            <v-card-text>
                <v-container>
                    <v-form ref="empleaveform" v-model="isFormValid">
                        <v-row>
                            <v-col cols="12" md="4" sm="12">
                                <v-text-field v-model="fromDate" label="From Date" type="date" :rules="daterules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" sm="12">
                                <v-text-field v-model="toDate" label="To Date" type="date" :rules="daterules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4" sm="12">
                                <v-autocomplete :rules="leavetyperules" v-model="employeeLeave.leave_type" :items="['Casual','Sick']" label="Leave Type"> </v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="12" sm="12">
                                <v-textarea v-model="employeeLeave.reason" label="Leave Reason" 
                                :rules="leavereason"
                                row-height="30" rows="3" no-resize>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="saveEmployeeleave"> Save </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" top :timeout="1000">
            {{ snackbar.message }}
        </v-snackbar>

</template>
<script setup lang="ts">
import { useHRMSDataStore } from '../../../store/apistore';
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import type { VForm } from 'vuetify/components';
import { useTheme } from 'vuetify';


const Addleave = useHRMSDataStore();
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const success = theme.current.value.colors.success;
const error = theme.current.value.colors.error;
const warning = theme.current.value.colors.warning;


const editedIndex = ref(-1);
const userID = ref('');
const dialog = ref(false);
const snackbar = ref({
    show: false,
    message: '',
    color: ''
});
const empleaveform = ref<VForm | null>(null);
const isFormValid = ref(false);
const fromDate = ref('');
const toDate = ref('');
const employeeLeave = ref({
    emp_id: '',
    leave_request_date: [''],
    leave_type: '',
    reason: ''
});
const defaultLeave = ref({
    emp_id: '',
    leave_request_date: [''],
    leave_type: '',
    reason: ''
});
const Chart = [16,3];
const chartOptions = computed(() => {
    return {
        series: Chart,
        labels: ["Total", "Remaining"],
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
        colors: [success,"#98aab4"],

        legend: {
            show: true, 
            position: "bottom",
            fontSize: "14px",
            color: success,
            formatter: function(seriesName: string, opts: { w: { globals: { series: number[] } }; seriesIndex: number }) {
                // Append the series data to each label
                return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
            }

        },
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    background: "none",
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Remaining',
                            fontSize: "14px",
                            color: primary,
                            formatter: () => Chart[1].toString(),
                            },
                        name: {
                            show: true,
                            fontSize: "12px",
                            color: undefined,
                            offsetY: 5,
                        },
                        value: {
                            show: true,
                            color: primary,
                        },
                    },
                },
            },
        },
    }
})

const Chart2 = [8,5];


const chartOptions2 = computed(() => {
    return {
        series: Chart,
        labels: ["Sick", "Remaining"],
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
        colors: [error,"#98aab4"],

        legend: {
            show: true, 
            position: "bottom",
            fontSize: "14px",
            color: success,
            formatter: function(seriesName: string, opts: { w: { globals: { series: number[] } }; seriesIndex: number }) {
                // Append the series data to each label
                return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
            }

        },
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        plotOptions: {
            pie: {
                donut: {
                    size: '80%',
                    background: "none",
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Remaining',
                            fontSize: "14px",
                            color: primary,
                            formatter: () => Chart2[1].toString(),
                            },
                        name: {
                            show: true,
                            fontSize: "12px",
                            color: undefined,
                            offsetY: 5,
                        },
                        value: {
                            show: true,
                            color: primary,
                        },
                    },
                },
            },
        },
    }
})

const Chart3 = [8,5];

const chartOptions3 = computed(() => {
    return {
        series: Chart,
        labels: ["Casual", "Remaining"],
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
        colors: [warning,"#98aab4"],

        legend: {
            show: true, 
            position: "bottom",
            fontSize: "14px",
            color: success,
            formatter: function(seriesName: string, opts: { w: { globals: { series: number[] } }; seriesIndex: number }) {
                // Append the series data to each label
                return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`;
            }

        },
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 150,
                    },
                },
            },
        ],
        plotOptions: {
            pie: {
                donut: {
                   
                    size: '80%',
                    background: "none",
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Remaining',
                            fontSize: "14px",
                            color: primary,
                            formatter: () => Chart3[1].toString(),
                            },
                        name: {
                            show: true,
                            fontSize: "12px",
                            color: undefined,
                            offsetY: 5,
                        },
                        value: {
                            show: true,
                            color: primary,
                        },
                    },
                },
            },
        },
    }
})

const daterules = computed(() => [
  (v: string) => !!v || 'Date is required',
]);

const leavetyperules = computed(() => [
  (v: string) => !!v || 'Leave Type is required',
]);

const leavereason = computed(() => [
  (v: string) => !!v || 'Leave Reason is required',
]);

onMounted(() => {
    userID.value = localStorage.getItem('HRMSuserID') || '';
   
});

const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Request Leave' : 'Edit a Leave';
});

const onpointerleave = () => {
    dialog.value = true;
};
const close = () => {
    dialog.value = false;
    nextTick(() => {
        employeeLeave.value = { ...defaultLeave.value };
        fromDate.value = '';
        toDate.value = '';
        editedIndex.value = -1;
    });
};

watch(dialog, (val) => {
    if (!val) {
        close();
    }
});

watch([fromDate, toDate], ([newFromDate, newToDate]) => {
    if (newFromDate && newToDate) {
        employeeLeave.value.leave_request_date = [newFromDate, newToDate];
    }
});
const saveEmployeeleave = async () => {
  if (empleaveform.value) {
    const valid = await empleaveform.value.validate();
    // console.log("Check", valid.valid);
    if (valid.valid === true) {
        // console.log("Form is valid, triggering API call...");
        saveEmployeeleavedata();
    } else {
      snackbar.value = {
        show: true,
        message: 'Please fill out all mandatory fields',
        color: 'error'
      };
    }
  }
};

const saveEmployeeleavedata = () => {
    const leaveres: Record<'Sick' | 'Casual', string> = {
        "Sick": 'sick',
        "Casual": 'casual'
    };
    const postData = {
        emp_id: userID.value,
        leave_type: leaveres[employeeLeave.value.leave_type as 'Sick' | 'Casual'],
        leave_request_date: employeeLeave.value.leave_request_date,
        reason: employeeLeave.value.reason
    };
    // console.log('postdata', postData);
    Addleave.SaveLeavedata(postData)
        .then((response) => {
            // console.log({ response });
            if (response.data.status == 1) {
                snackbar.value = {
                    show: true,
                    message: response.data.message,
                    color: 'primary'
                };                
                close();
                Addleave.getLeavesdata(userID.value);
            } else {
                snackbar.value = {
                    show: true,
                    message: response.data.message,
                    color: 'error'
                };
            }
        })
        .catch((err) => console.log('errors', err));
};
</script>
