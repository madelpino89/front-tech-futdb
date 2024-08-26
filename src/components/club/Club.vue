<template>
  <div class="grid">
    <div class="col-4 col-offset-4">
      <div class="p-3 h-full">
        <div class="block-section">
          <div class="block-content">
            <div class="p-4 border-1 surface-border surface-card border-round">
              <!-- <div class="text-900 font-medium text-xl mb-2">Basic</div>
              <div class="text-600">Plan description</div>
              <hr class="my-3 mx-0 border-top-1 border-none surface-border" /> -->
              <div>
                <span class="font-bold text-2xl text-900">
                  {{ club.name }}
                </span>
              </div>
              <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
              <div>
                <img :src="club.image" :alt="club.id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
    club: {
        type: Object,
        required: true
    },
    loading: {
        type: Boolean,
        required: false
    }
});
</script>