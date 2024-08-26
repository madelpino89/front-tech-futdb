<template>
  <template v-if="!loading">
    <div v-if="error" id="error-container">
      <Divider class="col-6 col-offset-3" />
      <Message class="col-6 col-offset-3" :closable="false" severity="error">
        {{ messageError }}
      </Message>
    </div>
    <div v-else>
      <hero :key="player.id" :player="player" />
      <!-- {{ player }} -->
    </div>
  </template>
  <template v-else>
    <skeleton-list />
  </template>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import useDataPlayers from "@/composables/useDataPlayers";
import useUtils from "@/composables/useUtils";
import Hero from "@/components/Hero.vue";
import SkeletonList from "@/components/SkeletonList.vue";
import { useRoute } from 'vue-router';
const route = useRoute();
const { getDataPlayer } = useDataPlayers();
const { loading, error, messageError } = useUtils();
const player = ref({});

onBeforeMount(async () => {
  try {
    loading.value = true;
    player.value = await getDataPlayer(route.params.id);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>