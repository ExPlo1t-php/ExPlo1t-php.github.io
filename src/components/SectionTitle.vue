<script setup>
import ProjectCard from './home/ProjectCard.vue';
    const props = defineProps({
        href: {
            type: String,
            required: true,
        },
        text: {
            type: String,
        }
    });
</script>

<template>
    <div class="flex justify-center ">
        <span class="text-orange-100 text-xl lg:text-3xl font-medium"><span class="text-orange-400 font-medium ">#</span>
            <slot/>
        </span>
        <div class="w-[5rem] 2xl:w-[45rem] lg:w-[40rem] md:w-[25rem] sm:w-[20rem] h-px mx-10 self-center border border-orange-100"></div>
        <a class="text-orange-100 text-md" :href="href">
            {{ text }}
        </a>
    </div>
</template>