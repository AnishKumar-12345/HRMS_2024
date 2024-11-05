<script setup lang="ts">
import { ref, computed } from 'vue';
import Addcompany from '../../components/ui-components/company/Addcompany.vue';
import Addbranch from '../../components/ui-components/company/Addbranch.vue';
import Adddepartment from '../../components/ui-components/company/Adddepartment.vue';
import Adddesignation from '../../components/ui-components/company/Adddesignation.vue';
import Addholidays from '../../components/ui-components/company/Addholidays.vue';
import Addroles from '../../components/ui-components/company/Addroles.vue';

const tab = ref('COMPANY');
const items = ref(['COMPANY', 'BRANCH', 'DEPARTMENT', 'DESIGNATION', 'HOLIDAYS', 'ROLES']);
const currentComponent = computed(() => {
    switch (tab.value) {
        case 'COMPANY':
            return Addcompany;
        case 'BRANCH':
            return Addbranch;
        case 'DEPARTMENT':
            return Adddepartment;
        case 'DESIGNATION':
            return Adddesignation;
        case 'HOLIDAYS':
            return Addholidays;
        case 'ROLES':
            return Addroles;       
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
