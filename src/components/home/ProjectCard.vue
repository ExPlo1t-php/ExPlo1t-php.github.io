<script setup>
    const props = defineProps({
        src: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <div class="h-fit max-w-80 my-4 border border-gray-400 flex flex-col">
        <img class="w-80 h-52 border-b border-gray-400" :src="src"/>

        <slot name="ProjectTechnology"/>
        <div class="self-stretch p-4 border-t border-gray-400 flex flex-col justify-start items-start gap-4">
            <!-- project name -->
            <div class="self-stretch text-orange-100 text-xl font-medium">
                <slot name="ProjectName"/>
            </div>
            <div class="self-stretch text-gray-400 text-base font-normal ">
                <slot name="ProjectDescription"/>
            </div>
            <div class="justify-start items-start gap-4 inline-flex">
                <button onclick="location.href = '/'" disabled class="px-4 py-2 border border-orange-400 text-orange-100 justify-start items-start gap-2.5 flex text-base font-medium disabled:border-slate-400 disabled:hover:bg-slate-100/50 disabled:hover:text-black">Live</button>
            </div>
        </div>
    </div>
</template>