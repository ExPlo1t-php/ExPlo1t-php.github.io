<script setup>
    import NavIconLink from './NavIconLink.vue';
    import NavGithub from '../icons/navigation/NavGithub.vue'
    import NavLinkedin from '../icons/navigation/NavLinkedin.vue'
    import NavMail from '../icons/navigation/NavMail.vue'
    import NavLink from './NavLink.vue';
</script>

<template>
        <!-- navigation bar -->
        <nav class="flex flex-wrap justify-center items-center border-b border-orange-100/20  p-4 text-xl">
        <!-- hamburger menu button -->
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-base text-gray-500 rounded-lg md:hidden hover:text-orange-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <!-- side symbols -->
        <div>
        <div class="w-48 h-px left-[42px] top-0 absolute origin-top-left rotate-90 border border-orange-100"></div>
        <NavIconLink href="https://ma.linkedin.com/in/younes-el-abbas-25738818a">
            <NavLinkedin/>
        </NavIconLink>
        <NavIconLink href="https://github.com/ExPlo1t-php">
            <NavGithub/>
        </NavIconLink>
        <NavIconLink href="mailto:younes.elabbas@outlook.com">
            <NavMail/>
        </NavIconLink>
        </div>
        <!-- nav links -->
        <div class="hidden  md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col items-center font-medium p-4
            md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                <div class="sm:flex">
                    <NavLink :href="'/'">
                        Home
                    </NavLink>
                    <NavLink :href="'/projects'">
                        Projects
                    </NavLink>
                    <NavLink :href="'/about-me'">
                        About-me
                    </NavLink>
                    <NavLink :href="'#contact'">
                        Contact
                    </NavLink>
                </div>
            </ul>
        </div>
    </nav>
</template>