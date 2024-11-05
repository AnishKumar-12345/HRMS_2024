<template>
    <div>
        <!-- :items="Cdata"  -->
        <v-data-table :headers="headers" :search="search" density="compact" fixed-header :items-per-page="10" height="400px">
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
                    <v-dialog v-model="dialog" max-width="800">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark  variant="flat" append-icon="mdi-account-circle" v-bind="props">
                                Add Employee Details
                            </v-btn>
                        </template>
                        <v-card elevation="10" class="overflow-hidden"  >
                            <v-card-item class="py-4 px-6">
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
                              
                            </v-card-item>
                            <v-card-text> 
                                <v-container>
                                  <v-form ref="empregisterform" v-model="isFormValid">
                                    <v-row>
                                       <v-col cols="12" md="3" sm="6">
                                        <v-text-field v-model="employeeregistraion.emp_code" label="Employee ID"                                       
                                            :rules="empcoderules"
                                            >
                                        </v-text-field>
                                       </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field v-model="employeeregistraion.name" label="Employee name"
                                            :rules="namerules"
                                            ></v-text-field>
                                            
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field v-model="employeeregistraion.phoneno" label="Phone no"
                                            type="number"
                                            :rules="phonerules"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field v-model="employeeregistraion.email" label="Email"
                                            :rules="emailRules"
                                            ></v-text-field>
                                        </v-col>                                         <v-col cols="12" md="3" sm="6">
                                            <v-autocomplete   v-model="employeeregistraion.gender" label="Gender"
                                            :items="['Male','Female']"
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.adharno" label="Aadhar No"
                                            type="number"
                                            :rules="aadharrules"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.panno" label="Pan No"
                                            :rules="pannorules"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.doj" label="Date of Joining" type="date"
                                            :rules="dojrules"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.dob" label="Date of Birth" type="date"
                                            :rules="dobrules"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.branch" label="Company Branch" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.department" label="Company Department" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.designation" label="Designation" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-text-field  v-model="employeeregistraion.role" label="Role" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="3" sm="6">
                                            <v-autocomplete v-model="employeeregistraion.supervisor"
                                            :items="supervisornames" 
                                            item-title="text"
                                            item-value="value"
                                            label="Supervisor"
                                            :rules="supervisorrule"
                                            ></v-autocomplete>
                                        </v-col>
                                        <v-col cols="12" md="6" sm="6">
                                            <v-textarea  v-model="employeeregistraion.address" label="Address" row-height="20"
                                            rows="2"  no-resize
                                            :rules="addressrule"
                                            
                                            ></v-textarea>
                                        </v-col>
                                   </v-row>
                                </v-form>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="saveEmployee"> Save </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar> 
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon class="me-2 icon-hover" size="small" color="info" @click="editicon"> mdi-pencil </v-icon>
                <v-icon class="icon-hover" size="small" color="error" @click="deleteicon"> mdi-delete </v-icon>
            </template>
        </v-data-table>
        <v-snackbar v-model="snackbar.show" :color="snackbar.color" top :timeout="1000">
            {{ snackbar.message }}
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">
import { useHRMSDataStore } from '../../../store/apistore';
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import type {VForm} from 'vuetify/components';
const AddEmployee = useHRMSDataStore();
const editedIndex = ref(-1);
const dialog = ref(false);
const snackbar = ref({
    show: false,
    message: '',
    color: ''
});
const supervisornames = ref([]);
const empregisterform = ref<VForm | null>(null);
const isFormValid = ref(false);


// Form validation rules
const emailRules = computed(() => [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]);

const phonerules = computed(() => [
  (v: string) => !!v || 'Mobile is required',
  (v: string) => /^[0-9]+$/.test(v) || 'Only numbers are accepted',
  (v: string) => v.length === 10 || 'Mobile must be 10 digits'
]);

const namerules = computed(() => [
  (v: string) => !!v || 'Employee Name is required',
  (v: string) => /^[a-zA-Z ]+$/.test(v) || 'Only letters are allowed in the name'
]);

const aadharrules = computed(() => [
  (v: string) => !!v || 'Aadhar No is required',
  (v: string) => /^[0-9]+$/.test(v) || 'Only numbers are accepted',
  (v: string) => v.length === 12 || 'Aadhar no must be 12 digits'
]);

const pannorules = computed(() => [
  (v: string) => !!v || 'Pan No is required',
  (v: string) => v.length === 10 || 'Pan no must be 10 characters'
]);

const dojrules = computed(() => [
  (v: string) => !!v || 'Date Of Joining is required'
]);

const dobrules = computed(() => [
  (v: string) => !!v || 'Date Of Birth is required'
]);

const empcoderules = computed(() => [
  (v: string) => !!v || 'Employee ID is required',
  (v: string) => v.length === 5 || 'Employee ID must be 5 characters'
]);

const supervisorrule = computed(() => [
  (v: string) => !!v || 'Supervisor is required'
]);

const addressrule = computed(() => [
  (v: string) => !!v || 'Address is required'
]);


const headers = [
    { title: 'Employee ID', key: 'id' },
    {
        title: 'Name',
        align: 'start',
        sortable: false,
        key: 'employeename'
    },
    { title: 'Phoneno', key: 'phoneno' },
    { title: 'Email', key: 'no_of_branche' },
    { title: 'Gender', key: 'actions'},
    { title: 'Aadhar', key: 'actions'},
    { title: 'Pan', key: 'actions'},
    { title: 'JoinDate', key: 'actions'},
    { title: 'BirthDate', key: 'actions'},
    { title: 'Branch', key: 'actions'},
    { title: 'Department', key: 'actions'},
    { title: 'Designation', key: 'actions'},
    { title: 'Role', key: 'actions'},
    { title: 'Address', key: 'actions'},
    { title: 'Supervisor', key: 'actions'},
    { title: 'Actions', key: 'actions'},

];

const employeeregistraion = ref({
    emp_code:'',
    name: '',
    phoneno: '',
    email: '',
    supervisor: '',
    gender: '',
    adharno:'',
    panno:'',
    address:'',
    doj:'',
    dob:'',
    branch:'',
    department:'',
    designation:'',
    role:'',   
});
const defaultEmployee = ref({
    emp_code:'',
    name: '',
    phoneno: '',
    email: '',
    supervisor: '',
    gender: '',
    adharno:'',
    panno:'',
    address:'',
    doj:'',
    dob:'',
    branch:'',
    department:'',
    designation:'',
    role:'',
});

const search = ref(null);

// onMounted(() => {
//     companydetails.getCompanyProfile();
// });

// const Cdata = companydetails.companyData;
// console.log({Cdata})

watch(dialog, (val) => {
    if (!val) {
        close(); 
    }
});



const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Add New Employee' : 'Edit Employee details';
});

const close = () => {
    dialog.value = false; 
    nextTick(() => {
        employeeregistraion.value = Object.assign({}, defaultEmployee.value); 
        editedIndex.value = -1; 
    });
};

const saveEmployee = async () => {
  if (empregisterform.value) {
    const valid = await empregisterform.value.validate();
    console.log("Check", valid.valid);
    if (valid.valid === true) {
        console.log("Form is valid, triggering API call...");
      saveEmployeedetails(); 
    } else {
      snackbar.value = {
        show: true,
        message: 'Please fill out all mandatory fields',
        color: 'error'
      };
    }
  }
};

onMounted(() => {
    AddEmployee.getSupervisor().then((response) => {
        console.log({ response });

        if (response.status === 1) {
            // Map directly from response.data since it is an array of objects
            supervisornames.value = response.data.map((n: { manager_id: string; name: string }) => ({
                value: n.manager_id,
                text: n.name
            }));
        }
    });
});

const saveEmployeedetails = () => {

    const postData = {
        emp_code : employeeregistraion.value.emp_code,
        name: employeeregistraion.value.name,
        phoneno: employeeregistraion.value.phoneno,
        email: employeeregistraion.value.email,
        manager_id: employeeregistraion.value.supervisor,
        gender: employeeregistraion.value.gender,
        adharno: employeeregistraion.value.adharno,
        panno: employeeregistraion.value.panno,
        address: employeeregistraion.value.address,
        doj: employeeregistraion.value.doj,
        dob: employeeregistraion.value.dob,
        branch: employeeregistraion.value.branch,
        department: employeeregistraion.value.department,
        designation: employeeregistraion.value.designation,
        role: employeeregistraion.value.role     
    };

     AddEmployee.Employeeregister(postData).then((response) => {
        // console.log({response});
        if (response.data.status == 1) {           
            snackbar.value = {
                show: true,
                message: response.data.message,
                color: 'primary'
            };
            close();
        } else {
            snackbar.value = {
                show: true,
                message: response.data.message, 
                color: 'error' 
            };
        }
     })
     .catch((err) => console.log('errors',err));
};

const editicon = () => {

};
const deleteicon = () => {

};



</script>
<style scoped>
.icon-hover {
    transition: transform 0.3s ease;
}
.icon-hover:hover {
    transform: scale(1.2); /* Scale up the icon on hover */
}
</style>

