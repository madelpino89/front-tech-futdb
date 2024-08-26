<template>
  <div class="grid">
    <div class="col-4 col-offset-4">
      <div class="p-3 h-full">
        <div class="block-section">
          <div class="block-content">
            <div class="p-4 border-1 surface-border surface-card border-round">
              <div>
                <span class="font-bold text-2xl text-900">
                  <Skeleton width="5rem" class="mb-2" />
                </span>
              </div>
              <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
              <div>
                <Skeleton size="5rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Skeleton from 'primevue/skeleton';
</script>