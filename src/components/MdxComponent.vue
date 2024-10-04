<script setup lang="ts">
import { MDXProvider } from "@mdx-js/vue";
import { ref, defineAsyncComponent } from 'vue'
import { VCodeBlock } from "@wdns/vue-code-block";
import PageLayout from "@/components/Layout/PageLayout.vue";
const props = defineProps(
        [
                'mdxComponent'
        ]
);
const components = {
    VCodeBlock,
}
const AsyncMDXComponent = defineAsyncComponent(() => props.mdxComponent())
</script>

<template lang="pug">
page-layout
    MDXProvider(:components="components")
        Suspense
            component(:is="AsyncMDXComponent")
        template(#fallback)
            div
                p Loading...
</template>

<style scoped lang="sass">
:deep(.v-code-block)
    grid-column: -1
</style>