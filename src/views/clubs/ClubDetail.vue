<template>
  <template v-if="!loading">
    <Club :key="club.id" :club="club" />
  </template>
  <template v-else>
    <skeleton-club />
  </template>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useDataClubs from "@/composables/useDataClubs";
import { useRoute } from 'vue-router';
import Club from "@/components/club/Club.vue";
import SkeletonClub from "@/components/skeletons/SkeletonClub.vue";
const route = useRoute();

const club=ref({});

const { loading, getDataClub } = useDataClubs();
onBeforeMount(async() => {
  try {
    loading.value = true;
    club.value = await getDataClub(route.params.id);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
});
</script>