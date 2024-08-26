<template>
  <DataTable v-model:filters="filters" :value="players" paginator :rows="5"
             filter-display="row" :loading="loading" :global-filter-fields="['name', 'age', 'position']"
             :rows-per-page-options="[5, 10, 20, 50]" table-style="min-width: 50rem"
  >
    <template #header>
      <div class="flex justify-end">
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
        </IconField>
      </div>
    </template>
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" style="min-width: 12rem">
      <template #body="{ data }">
        {{ data.name }}
      </template>
      <template #filter="{ filterModel, filterCallback }">
        <InputText v-model="filterModel.value" type="text" placeholder="Search by name" @input="filterCallback()" />
      </template>
    </Column>
    <Column field="age" header="Age" style="width: 25%" />
    <Column field="gender" header="Gender" :show-filter-menu="false" style="min-width: 12rem">
      <template #body="{ data }">
        {{ data.gender }}
      </template>
      <template #filter="{ filterModel, filterCallback }">
        <Select v-model="filterModel.value" :options="genders" placeholder="Select One" style="min-width: 12rem" :show-clear="true" @change="filterCallback()" />
      </template>
    </Column>
    <Column field="position" header="Position" :show-filter-menu="false" style="min-width: 12rem">
      <template #body="{ data }">
        {{ data.position }}
      </template>
      <template #filter="{ filterModel, filterCallback }">
        <Select v-model="filterModel.value" :options="positions" placeholder="Select position" style="min-width: 12rem" :show-clear="true" @change="filterCallback()" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { FilterMatchMode } from "@primevue/core/api";
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Select from 'primevue/select';
import Column from 'primevue/column';

import useDataPlayers from "@/composables/useDataPlayers";
import useUtils from "@/composables/useUtils"; 

const { dataPlayers, getPlayers } = useDataPlayers();
const { loading, error, messageError } = useUtils();
const players = ref([]);
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    position: { value: null, matchMode: FilterMatchMode.EQUALS },
    gender: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const genders = ref([
    'male', 'female'
]);
const positions = ref([
    'CM', 'CB', 'CAM', 'ST', 'RW', 'RWB', 'LW'
]);

onBeforeMount(async () => {
  try {
    loading.value = true;
    await getPlayers();
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