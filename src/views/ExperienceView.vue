<script setup lang="ts">
import Particles from "@/components/Particles.vue";
import NavBar from "@/components/NavBar.vue";
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
        <NavBar />
        <Particles />
        <Terminal
            command="
cat experience.md"
            terminalName="[experience.md]"
            :content="experienceText"
        />
    </main>
</template>
