<template>
  <template v-if="!loading">
    <div v-if="error" id="error-container">
      <Divider class="col-6 col-offset-3" />
      <Message class="col-6 col-offset-3" :closable="false" severity="error">
        {{ messageError }}
      </Message>
    </div>
    <div v-else>
      <h1>
        {{ $t("clubs.title") }}
      </h1>
      <Divider />
      <DataView :value="clubs" :layout="layout" lazy>
        <template #header>
          <div class="flex justify-end">
            <SelectButton v-model="layout" :options="options" :allow-empty="false">
              <template #option="{ option }">
                <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
              </template>
            </SelectButton>
          </div>
        </template>
        <template #list="slotProps">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div
              class="flex flex-column xl:flex-row xl:align-items-start lg:flex-row lg:align-items-start md:flex-row md:align-items-start sm:flex-row sm:align-items-start p-4 gap-4"
            >
              <Image
                class="w-9 sm:w-10rem xl:w-10rem"
                :src="item.image"
                :alt="item.name"
              />
              <div
                class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
              >
                <div
                  class="flex flex-column align-items-center sm:align-items-start gap-3"
                >
                  <div class="text-2xl font-bold text-900">
                    <Button
                      link
                      :label="item.name"
                      @click="showClubDetail(item)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="grid">
            <div v-for="(item, index) in slotProps.items" :key="index"  
                 class="col-12 sm:col-4 lg:col-3 xl:col-3 p-2"
            >
              <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-column align-items-center gap-3 py-5">
                  <template v-if="loading">
                    <Skeleton size="5rem" />
                  </template>
                  <template v-else>
                    <Image v-if="!loading"
                           class="w-9 sm:w-10rem xl:w-16rem"
                           :src="item.image"
                           :alt="item.id"
                    />
                  </template>
                  <div class="text-2xl font-bold">
                    <Button
                      link
                      :label="item.name"
                      @click="showClubDetail(item)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </template>
  <template v-else>
    <SkeletonList />
  </template>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import DataView from "primevue/dataview";
import Image from "primevue/image";
import Skeleton from "primevue/skeleton";
import SelectButton from "primevue/selectbutton";
import useDataClubs from "@/composables/useDataClubs";
import SkeletonList from "@/components/SkeletonList.vue";

const layout = ref("grid");
const options = ref(['list', 'grid']);
const { loading, error, messageError, resp, getPremierLeagueData, showClubDetail } = useDataClubs();
const clubs = ref([]);


onBeforeMount(async () => {
  try {
    loading.value = true;
    await getPremierLeagueData();
    clubs.value = resp.clubs;
  } catch (error) {
    error.value = true;
    messageError.value = error.message;
  } finally {
    loading.value = false;
  }
});
</script>
