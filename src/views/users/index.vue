<template>
  <div v-if="error" id="error-container">
    <Divider class="col-6 col-offset-3" />
    <Message class="col-6 col-offset-3" :closable="false" severity="error">
      {{ messageError }}
    </Message>
  </div>
  <div v-if="!loading">
    <h1>
      {{ $t("users.title") }}
    </h1>
    <Divider />
    <DataView :value="users" :layout="layout">
      <template #grid="slotProps">
        <div class="grid p-5">
          <div v-for="(item, index) in slotProps.items" :key="index"  
               class="col-12 sm:col-4 lg:col-3 xl:col-3 p-2"
          >
            <div class="p-4 border-1 surface-border surface-card border-round">
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img
                  class="w-9 sm:w-10rem xl:w-16rem shadow-2 border-round"
                  :src="item.picture.large"
                  :alt="item.email"
                />
                <div class="text-2xl font-bold">
                  <Button
                    link
                    :label="item.name"
                    @click="showUserDetail(item)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>

    <!-- <dialog-user :user="userDetail" /> -->

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
          <Avatar :image="userDetail.picture.large" shape="circle" />
          <span class="font-bold white-space-nowrap">
            {{ userDetail.name }}
          </span>
          <Button
            text
            plain
            size="small"
            label="Viewed"
            icon="pi pi-eye"
            severity="secondary"
            :badge="(userDetail.clicked).toString()"
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
              <span>
                {{ $t('users.email') }}
              </span>
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
              <span>
                {{ $t('users.phone') }}
              </span>
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
              <span>
                {{ $t('users.gender') }}
              </span>
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
              <span>
                {{ $t('users.documentId') }}
              </span>
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
  </div>
  <div v-else>
    <DataView :value="users" :layout="layout">
      <template #header>
        <div class="flex justify-end">
          <SelectButton v-model="layout" :options="options" :allow-empty="false">
            <template #option="{ option }">
              <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
            </template>
          </SelectButton>
        </div>
      </template>

      <template #list>
        <div class="flex flex-col">
          <div v-for="i in 6" :key="i">
            <div class="flex flex-col xl:flex-row xl:items-start p-6 gap-6" :class="{ 'border-t border-surface-200 dark:border-surface-700': i !== 0 }">
              <Skeleton class="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
              <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                <div class="flex flex-col items-center sm:items-start gap-4">
                  <Skeleton width="8rem" height="2rem" />
                  <Skeleton width="6rem" height="1rem" />

                  <div class="flex items-center gap-4">
                    <Skeleton width="6rem" height="1rem" />
                    <Skeleton width="3rem" height="1rem" />
                  </div>
                </div>
                <div class="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                  <Skeleton width="4rem" height="2rem" />
                  <Skeleton size="3rem" shape="circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #grid>
        <div class="grid grid-cols-12 gap-4">
          <div v-for="i in 6" :key="i" class="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
            <div class="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <Skeleton width="6rem" height="2rem" />
                <Skeleton width="3rem" height="1rem" />
              </div>
              <div class="flex flex-col items-center gap-4 py-8">
                <Skeleton width="75%" height="10rem" />
                <Skeleton width="8rem" height="2rem" />
                <Skeleton width="6rem" height="1rem" />
              </div>
              <div class="flex items-center justify-between">
                <Skeleton width="4rem" height="2rem" />
                <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import DataView from "primevue/dataview";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import Skeleton from "primevue/skeleton";
import Divider from "primevue/divider";
import Message from "primevue/message";

import useUsers from "@/composables/useUsers";
import useUtils from "@/composables/useUtils";
//import DialogUser from "@/components/user/DialogUser.vue";

const layout = ref("grid");
const options = ref(['list', 'grid']);
const { getRandomUsers, dialogVisible, userDetail, showUserDetail } = useUsers();
const { loading, error, messageError, capitalizeGender } = useUtils();
const users = ref([]);


onBeforeMount(async () => {
  try {
    loading.value = true;
    const resp = await getRandomUsers(16);
    users.value = resp;
  } catch (error) {
    loading.value = false;
  } finally {
    loading.value = false;
  }
});
</script>
