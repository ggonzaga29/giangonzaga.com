<script setup lang="ts">
import ProjectCard from "src/components/projects/ProjectCard.vue";
import { projects } from "src/shared/constants";

const { hideTitle } = defineProps<{
  hideTitle?: boolean;
}>();
</script>

<template>
  <section>
    <h2
      class="scroll-m-20 text-2xl font-extrabold tracking-tight first:mt-0"
      v-if="!hideTitle"
    >
      My Projects
    </h2>

    <div class="mt-8 space-y-8">
      <ProjectCard
        v-for="project in projects"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :image-src="project.imageSrc"
        :url="project.url"
      />
    </div>
  </section>
</template>
