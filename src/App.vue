<script setup lang="ts">
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {computed} from "vue";

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value.name)
</script>

<template lang="pug">
.app
    header-component(v-if="currentRoute !== 'Home'")
    router-view
</template>

<style scoped>
</style>
