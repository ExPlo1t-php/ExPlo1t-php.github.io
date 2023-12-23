<script setup>
import Header from '@/components/home/Header.vue';
import Quote from '@/components/home/Quote.vue';
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/home/ProjectCard.vue'
import TechnologySection from '@/components/home/TechnologySection.vue'
import Technology from '@/components/home/Technology.vue'
import SkillSection from '@/components/home/SkillSection.vue';
import SkillItem from '@/components/home/SkillItem.vue';
import AboutMe from '@/components/home/AboutMe.vue';
</script>

<template>
  <main class="mx-auto max-w-6xl">
    <Header/>
    <Quote/>
    <!-- projects panel -->
    <SectionTitle href="/projects" text="View all ==>">
        projects
    </SectionTitle>
    <!-- projects content -->
    <div class=" my-16 flex flex-wrap justify-evenly">
      <template  v-for="project in projects">
        <ProjectCard :src="project.image">
          <template v-slot:ProjectTechnology>
            <TechnologySection>
              <Technology v-for="technology in project.technologies">
                  {{technology}}
              </Technology>
            </TechnologySection>
          </template>
          <template v-slot:ProjectName>
            {{project.name}}
          </template>
          <template v-slot:ProjectDescription>
            {{ project.description }}
          </template>
        </ProjectCard>
      </template>
    </div>

    <!-- skills panel -->
    <SectionTitle>
      skills
    </SectionTitle>
    <!-- skills content -->
    <div class="my-16 grid grid-cols-2 gap-6">
      <SkillSection v-for="skill in skills">
        <template v-slot:SkillName>
            <template v-if="Array.isArray(skill.name)">
                {{skill.name[0]}}
                <span class="text-orange-400 font-medium">&&</span>
                {{ skill.name[1] }}
            </template>
            <template v-else>
              {{ skill.name }}
            </template>
        </template>
        <template v-slot:Skills>
            <SkillItem v-for="item in skill.skills" :src="item.image" :alt="item.alt">
              {{ item.name }}
            </SkillItem>
        </template>
      </SkillSection>
    </div>
    <!-- about-me panel -->
    <SectionTitle>
      about-me
    </SectionTitle>
    <!-- about-me content -->
    <AboutMe/>
  </main>
</template>


<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Planner',
          technologies: ['HTMl', 'Laravel', 'VueJS', 'Tailwind CSS', 'Inertia'],
          description: 'Employees Manager/Planner',
          image: '/src/assets/images/PO.png'
        },
        {
          name: 'Layout',
          technologies: ['HTMl', 'Laravel', 'JQuery', 'Tailwind CSS', 'JQuery UI Draggable'],
          description: 'A Web interface that displays machines layout and their status by pinging on their IP addresses',
          image: '/src/assets/images/VRC.png'
        },
        {
          name: 'Ping and store',
          technologies: ['Python 3'],
          description: 'A python script that fetches IP addresses from database, then pings on them and inserts their status in the database',
          image: '/src/assets/images/python.png'
        },
      ],
      skills: [
        {
          name: "Languages",
          skills: [
            { name: "JavaScript", image: "/src/assets/icons/javascript-plain.svg", alt:"JS" },
            { name: "php", image: "/src/assets/icons/php-original.svg", alt:"php" },
            { name: "Python", image: "/src/assets/icons/python-original.svg", alt:"py" },
          ],
        },
        {
          name: "Frameworks",
          skills: [
            { name: "Tailwind CSS", image: "/src/assets/icons/tailwindcss-plain.svg", alt:"twcss" },
            { name: "Laravel", image: "/src/assets/icons/laravel-plain.svg", alt:"laravel" },
            { name: "Vuejs", image: "/src/assets/icons/vuejs-original.svg", alt:"vuejs" },
            { name: "jQuery", image: "/src/assets/icons/jquery-original-wordmark.svg", alt:"jq" },
          ],
        },
        {
          name: ["Web Technologies","Databases"],
          skills: [
            { name: "HTML 5", image: "/src/assets/icons/html5-original.svg", alt:"html" },
            { name: "CSS 3", image: "/src/assets/icons/css3-original.svg", alt:"css" },
            { name: "MySQL", image: "/src/assets/icons/mysql-original-wordmark.svg", alt:"mysqueal" },
          ],
        },
        {
          name: "Operating Systems",
          skills: [
            { name: "Ubuntu", image: "/src/assets/icons/ubuntu-plain.svg", alt:"Uwuntu" },
            { name: "Kali", image: "/src/assets/icons/kali-1.svg", alt:"thedragent" },
            { name: "Windows Server", image: "/src/assets/icons/windows-server-2.svg", alt:"winserv" },
          ],
        },
        {
          name: "Tools",
          skills: [
            { name: "git", image: "/src/assets/icons/git-original.svg", alt:"verzencontrol" },
            { name: "github", image: "/src/assets/icons/github.svg", alt:"verzencontrol:theSite" },
            { name: "Figma", image: "/src/assets/icons/figma-original.svg", alt:"dizzyner" },
            { name: "Composer", image: "/src/assets/icons/composer-original.svg", alt:"\\|/" },
            { name: "npm", image: "/src/assets/icons/npm-original-wordmark.svg", alt:"apt but for js" },
            { name: "ssh", image: "/src/assets/icons/ssh-original-wordmark.svg", alt:"telnet but more secure" },
          ],
        },
        {
          name: "Misc",
          skills: [
            { name: "NMAP", image: "/src/assets/icons/nmap-logo.svg", alt:"portscanner" },
            { name: "VMware", image: "/src/assets/icons/vmware.svg", alt:"virtualmachineorsmtg" },
            { name: "burpsuite", image: "/src/assets/icons/icons8-burp-suite.svg", alt:"burrp" },
          ],
        },
      ]
    }
  }
}
</script>