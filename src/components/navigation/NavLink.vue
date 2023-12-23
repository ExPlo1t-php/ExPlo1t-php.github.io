<script setup>
    const props = defineProps({
        href: {
            type: String,
            required: true,
        },
    });
</script>



<template>
    <li>
        <a :href="href" class="group/item block rounded md:bg-transparent leading-tight link link-underline link-underline-orange md:p-3  " aria-current="page">
        <span class="text-orange-100 text-xl font-normal  group-hover/item:font-bold">
            <span class="text-orange-400 text-xl font-normal  group-hover/item:text-[F8A250]">$</span>
             <slot/>
        </span>
        </a>
    </li>
</template>