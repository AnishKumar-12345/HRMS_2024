<script setup lang="ts">
import { ref, computed } from 'vue';
import Employeeregister from '../../components/ui-components/Employee/Employeeregister.vue';
import Employeeupload from '../../components/ui-components/Employee/Employeeupload.vue';

const tab = ref('EMPLOYEE REGISTER/VIEW');
const items = ref(['EMPLOYEE REGISTER & VIEW', 'EMPLOYEE BULK UPLOAD']);
const currentComponent = computed(() => {
    switch (tab.value) {
        case 'EMPLOYEE REGISTER & VIEW':
            return Employeeregister;
        case 'EMPLOYEE BULK UPLOAD':
            return Employeeupload;       
        default:
            return null; // or a default component
    }
});



</script>

<template>
    <div>
      <v-card elevation="10"  class="overflow-hidden">
        <v-card-item class="v-card-item bg-surface pt-4 pb-2">
        <v-tabs  v-model="tab" bg-color="deep-purple-accent-4" color="primary" density="compact"  grow>
            <v-tab v-for="item in items" :key="item" :value="item">
                {{ item }}
            </v-tab>           
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item>           
                <v-card
                color="basil"
                flat
                >
                <v-card-text>
                    <component :is="currentComponent" />
                </v-card-text>
                </v-card>
            </v-tabs-window-item>
            </v-tabs-window>
        </v-card-item>
      </v-card>
    </div>
</template>
