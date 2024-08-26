<template>
  <div class="col-12">
    <div class="surface-section">
      <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div class="flex align-items-start flex-column md:flex-row">
          <!-- <img :src="player.image" class="mr-5 mb-3 lg:mb-0" style="width: 90px; height: 90px;" /> -->
          <Image :src="image" heigth="90" width="90" class="mr-5 mb-3 lg:mb-0" />
          <div>
            <span class="text-900 font-medium text-3xl">
              {{ title }}
            </span>
            <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
            <div class="flex align-items-center flex-wrap text-sm">
              <div class="mr-5 mt-3">
                <span class="font-medium text-500">
                  {{ $t('players.age.text').toUpperCase() }}
                </span>
                <div class="text-700 mt-2">
                  {{ $t('players.age.years', { age: player.age } ) }}
                </div>
              </div>
              <div class="mr-5 mt-3">
                <span class="font-medium text-500">
                  {{ $t('players.height.text').toUpperCase() }}
                </span>
                <div class="text-700 mt-2">
                  {{ $t('players.height.cm', { height: player.height }) }}
                </div>
              </div>
              <div class="mr-5 mt-3">
                <span class="font-medium text-500">
                  {{ $t('players.weight.text').toUpperCase() }}
                </span>
                <div class="text-700 mt-2">
                  {{ $t('players.weight.kg', { weight: player.weight }) }}
                </div>
              </div>
              <div class="mt-3">
                <span class="font-medium text-500">
                  {{ $t('players.gender').toUpperCase() }}
                </span>
                <div class="text-700 mt-2">
                  {{ capitalizeGender(player.gender) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="btnDetail" class="mt-3 lg:mt-0">
          <Button outlined :label="$t('ui.button.players.goToDetail')" icon="pi pi-id-card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import useUtils from '@/composables/useUtils';
import Button from 'primevue/button';
import Image from 'primevue/image';
//const capitalizeGender = useUtils().capitalizeGender;
const { capitalizeGender } = useUtils();
defineProps({
  player: {
    type: Object,
    required: true
  }, btnDetail: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Data & stats',

  },
  image: {
    type: String,
    default: '',
    required: true
  }
});


</script>