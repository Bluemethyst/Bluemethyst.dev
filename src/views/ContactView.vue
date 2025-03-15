<script setup lang="ts">
import Particles from "@/components/Particles.vue";
import NavBar from "@/components/NavBar.vue";
import Terminal from "@/components/Terminal.vue";
import { fetchFileText } from "@/funcs";
import { onMounted, ref } from "vue";

const contactText = ref("");

onMounted(async () => {
    contactText.value = await fetchFileText("/contact.yml");
});
</script>

<template>
    <main>
        <NavBar />
        <Particles />
        <Terminal
            command="
cat contact.yml"
            terminalName="[contact.yml]"
            :content="contactText"
        />
    </main>
</template>
