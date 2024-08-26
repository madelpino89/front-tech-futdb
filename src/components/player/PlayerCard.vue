<template>
  <div>
    <img :src="player.image" class="mb-3 w-full image-player" />
    <div class="flex justify-content-between align-items-start">
      <div>
        <div class="text-xl font-medium text-900 mb-2">
          {{ player.name }}
        </div>
        <!-- <p class="mt-0 mb-3 text-600">PNG image - 971 KB</p> -->
      </div>
    </div>
    <ul class="list-none m-0 p-0">
      <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
        <span class="text-600 font-medium text-sm">
          {{ $t('players.age.text').toUpperCase() }}
        </span>
        <span class="text-900 font-medium text-sm">
          {{ $t('players.age.years', { age: player.age } ) }}
        </span>
      </li>
      <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
        <span class="text-600 font-medium text-sm">
          {{ $t('players.height.text').toUpperCase() }}
        </span>
        <span class="text-900 font-medium text-sm">
          {{ $t('players.height.cm', { height: player.height }) }}
        </span>
      </li>
      <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
        <span class="text-600 font-medium text-sm">
          {{ $t('players.weight.text').toUpperCase() }}
        </span>
        <span class="text-900 font-medium text-sm">
          {{ $t('players.weight.kg', { weight: player.weight }) }}
        </span>
      </li>
      <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
        <span class="text-600 font-medium text-sm">
          {{ $t('players.gender').toUpperCase() }}
        </span>
        <span class="text-900 font-medium text-sm">
          {{ capitalizeGender(player.gender) }}
        </span>
      </li>
    </ul>
  </div>
  <div>
    <Button 
      outlined 
      :label="$t('ui.button.players.goToDetail')" 
      icon="pi pi-id-card" size="small"
      @click="showPlayerDetail(player.id)"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useUtils from '@/composables/useUtils';
import usePlayersData from '../../composables/useDataPlayers';

const { showPlayerDetail } = usePlayersData();

const capitalizeGender = useUtils().capitalizeGender;
//import Image from 'primevue/image';
defineProps({
  player: {
    type: Object,
    required: true
  },
});
</script>