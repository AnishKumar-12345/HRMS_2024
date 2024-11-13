<script setup lang="ts">
import { ref, computed, shallowRef } from 'vue';
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import Logo from './logo/Logo.vue';
// Icon Imports
import { Menu2Icon, BellRingingIcon } from 'vue-tabler-icons';
import NotificationDD from './vertical-header/NotificationDD.vue';
import ProfileDD from './vertical-header/ProfileDD.vue';

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
// const containerClass = computed(() => (sDrawer.value ? 'container-expanded' : 'container-collapsed'));
</script>
<!-- leftSidebar ml-sm-5 mt-sm-5 bg-containerBg -->
<template>
    <v-navigation-drawer left v-model="sDrawer" app class="navtest" elevation="10" width="270">
        <div class="pa-2 pl-3 nav_dashbar">
            <Logo />
        </div>
        <!-- ---------------------------------------------- -->
        <!---Navigation -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="scrollnavbar overflow-y-hidden">
            <v-list class="py-4 px-4" style="background-color: #273143 !important; color: white !important">
                <!---Menu Loop -->
                <template v-for="(item, i) in sidebarMenu">
                    <!---Item Sub Header -->
                    <NavGroup :item="item" v-if="item.header" :key="item.title" />
                    <!---Single Item-->
                    <NavItem :item="item" v-else class="leftPadding" />
                    <!---End Single Item-->
                </template>
                <!-- <Moreoption/> -->
            </v-list>
            <!-- <div class="py-0 px-6">
                <v-btn class="mr-2 bg-primary rounded-pill" size="large"
                    href="https://www.wrappixel.com/templates/spike-vuejs-admin-dashboard/?ref=33" block target="_blank">Upgrade to
                    Pro</v-btn>
            </div> -->
        </perfect-scrollbar>
    </v-navigation-drawer>
    <!-- verticalLayout -->
    <div class="container">
        <div class="maxWidth">
            <v-app-bar elevation="0" height="70" class="tester">
                <div class="d-flex align-center justify-space-between w-100">
                    <div>
                        <!-- hidden-lg-and-up -->
                        <!-- text-muted -->
                        <v-btn class=" " color="lightprimary" @click="sDrawer = !sDrawer" icon variant="flat" size="small">
                            <Menu2Icon size="20" stroke-width="1.5" />
                        </v-btn>
                        <!-- Notification -->
                        <NotificationDD />
                    </div>
                    &nbsp; &nbsp; &nbsp;
                    <v-text-field
                        class="rounded-pill"
                        placeholder="Search Employees or action"
                        prepend-inner-icon="mdi-magnify"
                        variant="outlined"
                        hide-details
                        single-line
                        style="background-color: rgb(255, 255, 255) !important; color: black"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <div>
                        <!-- Upgrade button -->
                        <!-- <v-btn class="mr-2 bg-primary rounded-pill"
                            href="https://www.wrappixel.com/templates/spike-vuejs-admin-dashboard/?ref=33"
                            target="_blank">Upgrade to Pro</v-btn> -->
                        <!-- User Profile -->
                        <ProfileDD />
                    </div>
                </div>
            </v-app-bar>
        </div>
    </div>
</template>
<style scoped>
.tester {
    /* border:1px solid red; */
    background: linear-gradient(135deg, #4386cd, #6a0dad) !important; /* Blue to Violet gradient */
    color: white !important;
    padding: 0 20px;
    /* max-width: 1300px; */
    margin: 0 auto;
    /* border-radius: 18px; */
    box-shadow: 0 2px 6px rgba(37, 83, 185, 0.1) !important;
    position: relative;
    overflow: hidden; /* Ensure petals don't overflow the toolbar */
}

/* Generate flower petals using ::before and ::after */
.tester::before,
.tester::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle at 40% 40%, #ffb7c5 10%, #ff6188 80%);
    border-radius: 50%;
    opacity: 0.8;
    transform: rotate(45deg);
}

/* Second petal layer */
.tester::after {
    top: 60%;
    left: 30%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at 50% 50%, #fdfd96 10%, #ffd700 80%);
    transform: rotate(-45deg);
    opacity: 0.5;
}
.navtest {
    height: 70px;
    /* border: 1px solid red; */
    overflow: hidden;
    background: linear-gradient(135deg, #4386cd, #4282cc) !important;
    color: white;
}
</style>
