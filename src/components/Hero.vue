<template>
  <div class="grid grid-nogutter col-8 col-offset-2 surface-section text-800">
    <div class="col-12 md:col-9 p-6 text-center md:text-left flex align-items-center ">
      <div class="col-12">
        <span class="block text-6xl font-bold mb-1">
          {{ player.name }}
        </span>
        <div class="text-6xl text-primary font-bold mb-3">
          {{ player?.club.name }}
          <!-- <img :src="player.club.image" class="image-player" /> -->
        </div>
        <Divider />
        <p class="mt-0 mb-4 text-700 line-height-3">
          <player-item :key="player.id" :player="player" :image="player.club.image" />
        </p>
      </div>
      <!-- <Divider layout="vertical" /> -->
    </div>
    <div class="col-12 md:col-3 overflow-hidden">
      <img :src="player.image" alt="Image" class="image-player-hero" />
    </div>
  </div>
  <Divider />
</template>

<script setup>
import { defineProps } from 'vue';
import PlayerItem from "@/components/player/PlayerItem.vue";

defineProps({
  player: {
    type: Object,
    required: true
  },
});
</script>