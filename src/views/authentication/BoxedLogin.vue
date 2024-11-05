<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <div class="authentication" >
        <v-container fluid class="pa-3" >
            <v-row class="h-100vh d-flex">
                <!-- Left side - Video -->
                <v-col cols="12" sm="6" md="6" class="d-flex align-center justify-center">
                    <!-- <video  autoplay loop muted playsinline preload="none" poster="../../assets/images/backgrounds/animate.png">
                        <source src="../../assets//images/backgrounds/ZTkud2VibQ.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video> -->
                    <img src="../../assets/images/blog/man.png" alt="" height="500">
                </v-col>

                <!-- Right side - Login form -->
                <v-col cols="12" sm="6" md="4" class="d-flex align-center justify-end">
                    <div class="boxed-auth-wrap">
                        <v-card rounded="xl" elevation="10" class="px-sm-1 px-0 mx-auto index-2" max-width="500">
                            <v-card-item class="pa-sm-8">
                                <div class="d-flex justify-center mb-5">
                    <!-- <img src="../../assets/images/logos/Dis_logo.png" alt="" width="400" height="80"> -->

                                    <Logo />
                                </div>
                                <LoginForm />
                            </v-card-item>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
