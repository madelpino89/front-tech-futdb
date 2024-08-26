<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Header"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div
        class="inline-flex align-items-center justify-content-center gap-2"
      >
        <Avatar :image="player.image" shape="circle" />
        <span class="font-bold white-space-nowrap">
          {{ players.name }}
        </span>
        <Button
          text
          plain
          size="small"
          label="Viewed"
          icon="pi pi-eye"
          severity="secondary"
          :badge="player.clicked"
          class="cursor-auto"
          badge-class="p-badge-success"
        />
      </div>
    </template>
    <div class="surface-section">
      <ul class="list-none p-0 m-0">
        <li
          v-if="userDetail.email"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-envelope" />
            </span>
            <span> Email </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ userDetail.email }}
          </div>
        </li>
        <li
          v-if="userDetail.phone"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-phone" />
            </span>
            <span> Phone </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ userDetail.phone }}
          </div>
        </li>
        <li
          v-if="userDetail.gender"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-info-circle" />
            </span>
            <span> Gender </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ capitalizeGender(userDetail.gender) }}
          </div>
        </li>
        <li
          v-if="userDetail.id.value"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-id-card" />
            </span>
            <span> DNI </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ userDetail.id.value }}
          </div>
        </li>
      </ul>
    </div>
    <template #footer>
      <Button
        label="Ok"
        icon="pi pi-check"
        autofocus
        @click="dialogVisible = false"
      />
    </template>
  </Dialog>
</template>
<script setup>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import { ref } from 'vue';
import useUtils from "@/composables/useUtils";

const { capitalizeGender } = useUtils();
const dialogVisible = ref(false);

defineProps({
  player: {
    type: Object,
    required: true
  },
});
</script>