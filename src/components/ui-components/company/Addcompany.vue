<template>
    <div>
        <v-data-table :headers="headers" :items="Cdata" :search="search" density="compact" fixed-header :items-per-page="10" height="400px">
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
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" dark  variant="flat" append-icon="mdi-account-circle" v-bind="props">
                                Add Company
                            </v-btn>
                        </template>
                        <v-card elevation="10" class="overflow-hidden" width="600">
                            <v-card-item class="py-4 px-6">
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>
                            </v-card-item>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.name" label="Company name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.calories" label="Location"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.fat" label="No of branches"></v-text-field>
                                        </v-col>
                                        <!-- <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                        </v-col> -->
                                        <!-- <v-col cols="12" md="4" sm="6">
                                            <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                                        </v-col> -->
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="savecompany"> Save </v-btn>
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
    </div>
</template>

<script setup lang="ts">
import { useHRMSDataStore } from '../../../store/apistore';
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const companydetails = useHRMSDataStore();
const editedIndex = ref(-1);
const dialog = ref(false);
const headers = [
    { title: 'ID', key: 'id' },
    {
        title: 'Company Name',
        align: 'start',
        sortable: false,
        key: 'companyName'
    },
    { title: 'Location', key: 'location' },
    { title: 'No. Of Branches', key: 'no_of_branche' },
    // { title: 'Carbs (g)', key: 'carbs' },
    // { title: 'Protein (g)', key: 'protein' },
    { title: 'Actions', key: 'actions', sortable: false }
];

const editedItem = ref({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
});
const defaultItem = ref({
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
});
const search = ref(null);

onMounted(() => {
    companydetails.getCompanyProfile();
});

const Cdata = companydetails.companyData;
console.log({Cdata})

watch(dialog, (val) => {
    if (!val) {
        close(); 
    }
});



const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Add a New Company' : 'Edit Item';
});

const close = () => {
    dialog.value = false; 
    nextTick(() => {
        editedItem.value = Object.assign({}, defaultItem.value); 
        editedIndex.value = -1; 
    });
};

const savecompany = () => {

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
