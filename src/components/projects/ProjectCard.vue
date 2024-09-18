<script setup lang="ts">
import { Card, CardContent } from "src/components/ui/card";
import { AspectRatio } from "src/components/ui/aspect-ratio";
import { Badge } from "src/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  url?: string;
};

const { title, description, tags, imageSrc, url } =
  defineProps<ProjectCardProps>();
</script>

<template>
  <a
    :href="`${url ? `https://${url}` : '#'}`"
    class="relative max-w-2xl w-full cursor-pointer project-card"
  >
    <Card
      class="group border-none shadow-none transition-colors rounded-xl min-w-full relative bg-transparent"
    >
      <CardContent class="relative px-0">
        <article class="px-0 z-10">
          <div class="w-[200px] h-auto mb-6">
            <!-- <AspectRatio :ratio="3 / 2"> -->
            <img :src="imageSrc" class="rounded-md object-cover border" />
            <!-- </AspectRatio> -->
          </div>
          <div class="space-y-4">
            <h3
              class="scroll-m-20 text-xl font-bold tracking-tight text-heading"
            >
              {{ title }} 
            </h3>
            <p class="text-foreground">
              {{ description }}
            </p>

            <div class="!mt-6 flex gap-2">
              <Badge v-for="tag in tags" class="text-xs">{{ tag }}</Badge>
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  </a>
</template>

<style>
.project-card::before {
  content: "";
  width: 110%;
  height: 100%;
  @apply bg-gray-100 block absolute transition-opacity rounded-lg;
  top: -5%;
  left: -5%;
  right: -5%;
  z-index: 0;
  opacity: 0;
}

.project-card:hover::before {
  opacity: 1;
}
</style>
