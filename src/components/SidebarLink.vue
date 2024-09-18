<script setup lang="ts">
import { links } from "src/shared/constants";

// const isCurrentPage = (href: string) => {
//   console.log(window.location.pathname);
//   return window.location.pathname === href;
// };

// ${
//         // isCurrentPage(link.href)
//         //   ? 'bg-background/60 border'
//         //   : 'bg-transparent border-none'
//       }
</script>

<template>
  <a v-for="link in links" class="group cursor-pointer" :href="link.href">
    <li
      :class="`w-full bg-transparent border-opacity-100 group-hover:bg-background/60 group-hover:border-opacity-100 transition-colors delay-0 text-left px-4 py-2 rounded-md`"
    >
      {{ link.label }}
    </li>
  </a>
</template>
