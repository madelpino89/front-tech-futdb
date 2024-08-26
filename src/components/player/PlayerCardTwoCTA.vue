<template>
  <div class="surface-card shadow-2 border-round p-4">
    <div class="flex border-bottom-1 surface-border pb-4">
      <img :src="player.image" class="mr-3" style="width: 70px; height: 70px;" />
      <div class="flex flex-column align-items-start">
        <span class="text-xl text-900 font-medium mb-1">
          {{ players.name }}
        </span>
        <span class="text-600 font-medium mb-2">Test Engineer</span>
        <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span>
      </div>
    </div>
    <div class="flex justify-content-between pt-4">
      <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button" aria-label="View" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
        <span class="p-button-icon p-button-icon-left pi pi-search" data-pc-section="icon"></span>
        <span class="p-button-label" data-pc-section="label">View</span>
        <!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
      </button><button class="p-button p-component p-button-outlined p-button-secondary w-6 ml-2" type="button" aria-label="Follow" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
        <span class="p-button-icon p-button-icon-left pi pi-user-plus" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label">Follow</span>
        <!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
      </button>
    </div>
  </div>
</template>

<script setup>

defineProps({
  player: {
    type: Object,
    required: true
  },
});
</script>