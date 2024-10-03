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
    router-view(v-slot="{ Component }")
        transition(name="fade" mode="out-in")
            component(:is="Component")
</template>

<style scoped lang="sass">
.fade-enter-active, .fade-leave-active
    transition: opacity 0.5s ease

.fade-leave-from, .fade-enter-to
    opacity: 1

.fade-enter-from, .fade-leave-to
    opacity: 0
</style>
