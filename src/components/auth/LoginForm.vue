<script setup lang="ts">
import { ref, computed } from 'vue';
import { useHRMSDataStore } from '../../store/apistore';
import { useRouter } from 'vue-router';

const router = useRouter();
const checkbox = ref(false);
const isPasswordVisible = ref(false);
const Logindetails = useHRMSDataStore();
const logindata = ref({
    email: '',
    password: ''
});
const snackbar = ref({
    show: false, 
    message: '',
    color: ''
});

const loginuser = () => {
    if (!logindata.value.email || !logindata.value.password) {
        snackbar.value = {
            show: true,
            message: 'Please give mandatory fields',
            color: 'error'
        };

        return;
    }

    const requestData = {
        email: logindata.value.email,
        password: logindata.value.password
    };
    Logindetails.Loginregistration(requestData).then((response) => {
        // console.log('check',response.data.user_data.emp_id);
        // const res = response.data
        if (response.data.status == 1) {
            setTimeout(() => {
                router.push('/dashboard');
            }, 500);
            localStorage.setItem("HRMSuserID",response.data.user_data.emp_id);
            snackbar.value = {
                show: true,
                message: response.data.message,
                color: 'primary'
            };
        
        } else {
            snackbar.value = {
                show: true,
                message: response.data.message, // Display the error message from the API
                color: 'error' // Set the color to 'error' for red color, or use 'success' for green, etc.
            };
        }
    });
};

const emailRules = computed(() => [(v: string) => !!v || 'Email is required', (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid']);

const passwordrules = computed(() => [(v: string) => !!v || 'Password is required']);
</script>

<template>
    <div class="d-flex align-center text-center mb-6">
        <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
            <span class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100">Login to HRMS</span>
        </div>
    </div>
    <div class="w-100">
        <v-form>
            <v-row class="mb-3">
                <v-col cols="12">
                    <!-- <v-label class="font-weight-medium mb-1">Email</v-label> -->
                    <v-text-field
                        variant="outlined"
                        class="pwdInput"
                        v-model="logindata.email"
                       style="max-width: 100%; width: 500px;"
                        color="primary"
                        :rules="emailRules"
                        label="Email"

                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <!-- <v-label class="font-weight-medium mb-1">Password</v-label> -->
                    <v-text-field
                        variant="outlined"
                        class="border-borderColor"
                        label="Password"
                        v-model="logindata.password"
                        :rules="passwordrules"
                      style="max-width: 100%; width: 500px;"
                        :type="isPasswordVisible ? 'text' : 'password'"
                        :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                        @click:append-inner="isPasswordVisible = !isPasswordVisible"
                        color="primary"
                    ></v-text-field>
                </v-col>
                <!-- <v-col cols="12 " class="py-0">
                <div class="d-flex flex-wrap align-center w-100 ">
                    <v-checkbox hide-details color="primary">
                        <template v-slot:label class="">Remeber this Device</template>
                    </v-checkbox>
                    <div class="ml-sm-auto">
                        <RouterLink to=""
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                            Forgot Password ?</RouterLink>
                    </div>
                </div>
            </v-col> -->
                <v-col cols="12">
                    <v-btn size="large" @click.prevent="loginuser" rounded="pill" color="primary" class="rounded-pill" block flat
                        >Sign In</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>
        <v-snackbar v-model="snackbar.show" :color="snackbar.color" top :timeout="1000">
            {{ snackbar.message }}
        </v-snackbar>
    </div>
</template>
