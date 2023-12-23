<script setup>
import FooterGithub from './FooterGithub.vue';
import FooterLinkedin from './FooterLinkedin.vue';
import FooterMail from './FooterMail.vue';
</script>

<template>
    <footer class="flex justify-evenly border-t border-orange-100/20 text-orange-100 ">
        <div class="flex flex-col p-14">
            <span class="font-bold text-xl">Younes El Abbas</span>
            <span class="text-sm font-extralight">Jr. web developer(scavenger), Jr. SOC analyst(loading...) </span>
        </div>
        <div class="p-14 text-left">
            <span class="font-bold text-xl">Contact</span>
            <div class="flex justify-between">
                <a class="p-2 group/footer" href="https://ma.linkedin.com/in/younes-el-abbas-25738818a" target="_blank">
                    <FooterLinkedin/>
                </a>
                <a class="p-2 group/footer" href="https://github.com/explo1t-php" target="_blank">
                    <FooterGithub/>
                </a>
                <a class="p-2 group/footer" href="tomail:younes.elabbas@outlook.com" target="_blank">
                    <FooterMail/>
                </a>
            </div>
        </div>
    </footer>
    <footer>

    </footer>
</template>