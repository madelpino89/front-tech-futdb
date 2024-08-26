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
        <Avatar :image="user.picture.large" shape="circle" />
        <span class="font-bold white-space-nowrap">
          {{ user.name }}
        </span>
        <Button
          text
          plain
          size="small"
          label="Viewed"
          icon="pi pi-eye"
          severity="secondary"
          :badge="user.clicked"
          class="cursor-auto"
          badge-class="p-badge-success"
        />
      </div>
    </template>
    <div class="surface-section">
      <ul class="list-none p-0 m-0">
        <li
          v-if="user.email"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-envelope" />
            </span>
            <span> Email </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ user.email }}
          </div>
        </li>
        <li
          v-if="user.phone"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-phone" />
            </span>
            <span> Phone </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ user.phone }}
          </div>
        </li>
        <li
          v-if="user.gender"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-info-circle" />
            </span>
            <span> Gender </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ capitalizeGender(user.gender) }}
          </div>
        </li>
        <li
          v-if="user.id.value"
          class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"
        >
          <div class="text-500 w-6 md:w-2 font-medium">
            <span class="mr-2">
              <i class="pi pi-id-card" />
            </span>
            <span> DNI </span>
          </div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            {{ user.id.value }}
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
import { ref, defineProps } from "vue";
import useUtils from "@/composables/useUtils";
import useUsers from "../../composables/useUsers";

import Avatar from "primevue/avatar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";


const { capitalizeGender } = useUtils();
const { dialogVisible } = useUsers();
const user = ref(null);

defineProps({
  user: {
    type: Object,
    required: true
  }
});

</script>