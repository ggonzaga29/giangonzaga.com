<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { socialLinks, links } from "src/shared/constants";
</script>

<template>
  <aside
    class="h-screen fixed left-0 top-0 z-20 select-none w-56 text-sm flex flex-col items-center justify-between pb-8 py-12"
  >
    <div>
      <!-- Avatar -->
      <div class="flex gap-2">
        <Avatar>
          <img src="/profile.jpg" />
          <AvatarFallback />
        </Avatar>
        <div>
          <h2 class="font-bold">Gian Gonzaga</h2>
          <p class="text-foreground/60">Full-Stack Developer</p>
        </div>
      </div>

      <!-- Links -->
      <div class="space-y-4 mt-6">
        <ul class="space-y-2">
          <slot />
          <!-- <SidebarLink /> -->
        </ul>
      </div>

      <!-- Social Links -->
      <div class="space-y-4 mt-6">
        <h4 class="font-bold ml-2">Socials</h4>
        <ul class="space-y-2">
          <a
            class="group cursor-pointer"
            v-for="link in socialLinks"
            :href="link.href"
            target="_blank"
          >
            <li
              class="w-full bg-transparent border-none group-hover:bg-background/60 group-hover:border transition-colors delay-0 text-left px-4 py-2 rounded-md"
            >
              {{ link.label }}
            </li>
          </a>
        </ul>
      </div>
    </div>

    <Button as-child>
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=10a-MtPllaotnYZC737CAlIc8sKvbDQhV&export=download"
        >Download Resume</a
      >
    </Button>
  </aside>
</template>
