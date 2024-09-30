<script setup lang="ts">
import {computed} from "vue";
import { useRouter } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";

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
