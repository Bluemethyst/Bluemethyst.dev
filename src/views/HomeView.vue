<script setup lang="ts">
import Particles from "@/components/Particles.vue";
import Title from "@/components/Title.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
    <main>
        <Particles />
        <Navbar />
        <Title
            text="[bluemethyst.dev]"
            :typingSpeed="150"
            subtitleText="The developer you've been looking for"
            :subtitleTypingSpeed="50"
        />
    </main>
</template>
