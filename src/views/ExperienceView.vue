<script setup lang="ts">
import Particles from "@/components/Particles.vue";
import Navbar from "@/components/Navbar.vue";
import Terminal from "@/components/Terminal.vue";
import { fetchFileText } from "@/funcs";
import { onMounted, ref } from "vue";

const experienceText = ref("");

onMounted(async () => {
    experienceText.value = await fetchFileText("/experience.md");
});
</script>

<template>
    <main>
        <Navbar />
        <Particles />
        <Terminal
            command="
cat experience.md"
            terminalName="[experience.md]"
            :content="experienceText"
        />
    </main>
</template>
