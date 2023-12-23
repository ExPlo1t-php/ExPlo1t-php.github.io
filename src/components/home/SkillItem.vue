<script setup>
    const props = defineProps({
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
        },
    });
</script>

<template>
    <li class="flex flex-col items-center mx-4">
        <img class="w-20 mb-2" :src="src" :alt="alt">
        <span>
            <slot/>
        </span>
    </li>  
</template>
