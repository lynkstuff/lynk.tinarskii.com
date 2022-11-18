<script setup lang="ts">
  import { data, links } from "./lib/data";
</script>

<template>
  <div class="flex lg:flex-row flex-col">
    <div
        class="bg-info w-full h-full lg:w-[40vw] lg:h-screen"
        style="background-image: url('/banner.jpg'); background-size: cover; background-position: center;"
    >
      <div class="w-full h-full py-12 lg:py-0 backdrop-blur-lg bg-black/30">
        <div class="flex flex-col h-full mx-6 items-center justify-center gap-4">
          <img :src="data.avat" class="w-48 h-48 rounded-full" />
          <h1 class="text-center text-4xl lg:text-6xl">{{data.name}}'s Lynk</h1>
          <p>{{data.desc}}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-0 items-center h-screen w-screen overflow-y-auto">
      <div
          class="w-full bg-gradient-to-r from-primary to-secondary"
          v-for="link in links"
      >
        <a :href="link.link">
          <div class="w-full h-full hover:bg-black/20 cursor-pointer duration-200">
            <div class="flex flex-row gap-2 px-8 py-4">
              <font-awesome-icon :icon="link.icon" class="w-12 h-12 text-white" />
              <div class="flex flex-col gap-1">
                <h1 class="text-white text-2xl">
                  {{link.name}}
                </h1>
                <p>
                  {{link.desc}}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>