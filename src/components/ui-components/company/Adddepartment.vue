<template>
    <div>
        <h1>Add Department</h1>
    </div>      
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();


const form = ref({
    name: '',
    email: '',
    phone: '',
    address: '',
});
</script>   