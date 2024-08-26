<template>
  <template v-if="error">
    <div v-if="error" id="error-container">
      <Divider class="col-6 col-offset-3" />
      <Message class="col-6 col-offset-3" :closable="false" severity="error">
        {{ messageError }}
      </Message>
    </div>
  </template>
  <template v-else>
    <div v-if="loading" id="error-container">
      <SkeletonList />
    </div>
    <div v-else>
      <h1>
        {{ $t("players.title") }}
      </h1>
      <Divider />
      <data-view :value="players" :layout="layout" lazy>
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
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 p-2">
            <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between border-bottom-1 surface-border surface-card">
              <player-item :key="item.id" :player="item" :btn-detail="true" :title="item.name" :image="item.image" />
            </div>
          </div>
        </template>

        <template #grid="slotProps">
          <div class="grid">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-4 lg:col-3 xl:col-3 p-2">
              <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-column align-items-center gap-3">
                  <player-card :key="item.id" :player="item" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </data-view>
    </div>
  </template>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import DataView from "primevue/dataview";
import useDataPlayers from "@/composables/useDataPlayers";
import useUtils from "@/composables/useUtils";  
import PlayerItem from "@/components/player/PlayerItem.vue";
import PlayerCard from "@/components/player/PlayerCard.vue";
import SelectButton from "primevue/selectbutton";
//import PlayerCardTwoCTA from "../../components/PlayerCardTwoCTA.vue";
import SkeletonList from "@/components/SkeletonList.vue";
import Message from "primevue/message";
import Divider from "primevue/divider";

const layout = ref("grid");
const options = ref(['list', 'grid']);
const { dataPlayers, getDataPlayers } = useDataPlayers();
const { loading, error, messageError } = useUtils();
const players = ref([]);


onBeforeMount(async () => {
  try {
    loading.value = true;
    await getDataPlayers();
    players.value = dataPlayers.players;
  } catch (e) {
    loading.value = false;
    error.value = true;
    messageError.value = e.message;
  } finally {
    loading.value = false;
  }
});
</script>
