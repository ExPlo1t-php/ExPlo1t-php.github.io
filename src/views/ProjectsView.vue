<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import PageTitle from '@/components/PageTitle.vue';
import ProjectCard from '@/components/home/ProjectCard.vue';
import TechnologySection from '@/components/home/TechnologySection.vue';
import Technology from '@/components/home/Technology.vue';
</script>

<template>
    <main class="mx-auto max-w-6xl">
        <PageTitle>
            <template v-slot:name>
                Projects
            </template>
            <template v-slot:description>
                SELECT * FROM `projects`
            </template>
        </PageTitle>

        <SectionTitle class="my-4">
            medium
        </SectionTitle>
        <!-- medium projects -->
        <div class=" my-8 flex flex-wrap justify-evenly">
            <template  v-for="project in projects" >
                <ProjectCard :src="project.image" v-if="project.class=='medium'">
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
        <SectionTitle class="my-4">
            small
        </SectionTitle>
        <!-- medium projects -->
        <div class=" my-8 flex flex-wrap justify-evenly">
            <template  v-for="project in projects" >
                <ProjectCard :src="project.image" v-if="project.class=='small'">
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
                image: '/src/assets/images/PO.png',
                class: 'medium',
                },
                {
                name: 'Layout',
                technologies: ['HTMl', 'Laravel', 'JQuery', 'Tailwind CSS', 'JQuery UI Draggable'],
                description: 'A Web interface that displays machines layout and their status by pinging on their IP addresses',
                image: '/src/assets/images/VRC.png',
                class: 'medium',
                },
                {
                name: 'Ping and store',
                technologies: ['Python 3'],
                description: 'A python script that fetches IP addresses from database, then pings on them and inserts their status in the database',
                image: '/src/assets/images/python.png',
                class: 'small',
                },
            ],
        }
    }
}
</script>