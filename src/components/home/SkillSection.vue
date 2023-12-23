<template>
    <div class="text-xl text-orange-100 border-r border-orange-100">
        <span class="">
            <span class="text-orange-400 font-medium">./ </span> 
            <slot name="SkillName"/>
        </span>
        <ul class="p-8 flex flex-wrap text-base text-center">
            <slot name="Skills"/>
        </ul>
    </div>
</template>