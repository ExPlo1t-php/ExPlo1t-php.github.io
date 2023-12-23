<template>
    <div class="flex justify-start flex-col m-3">
        <span class="text-orange-100 text-2xl lg:text-3xl font-bold p-2"><span class="text-orange-400 font-medium ">/</span>
            <slot name="name"/>
        </span>
        <span class="text-gray-400 text-sm p-2">
            <slot name="description"/>
        </span>
    </div>
</template>