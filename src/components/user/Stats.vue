<template>
  <div class="surface-card shadow-2 p-3 border-round">
    <div class="flex justify-content-between mb-3">
      <div>
        <span class="block text-2xl text-left font-bold mb-3">{{ title }}</span>
        <div class="text-left text-500">
          <span class="font-light text-xl text-700">{{ total }}</span>
          <span>&nbsp;coupons with discount</span>
        </div>
      </div>
      <div
        class="flex align-items-center justify-content-center border-round"
        :class="`bg-${color}-100`"
        style="width: 2.5rem; height: 2.5rem"
      >
        <i
          v-if="symbol === '%'"
          class="pi pi-percentage text-xl"
          :class="`text-${color}-500`"
        />
        <i v-else class="pi pi-dollar text-xl" :class="`text-${color}-500`" />
      </div>
    </div>
    <div class="text-left text-sm mt-2">
      <span v-if="symbol === '$'" class="text-green-500 font-bold">{{ symbol }}{{ min }}</span>
      <span v-else class="text-green-500 font-bold">{{ min }}{{ symbol }}</span>
      <span class="font-medium">&nbsp;min discount</span>
    </div>
    <div class="text-left text-sm mt-2">
      <span v-if="symbol === '$'" class="font-bold text-green-500">{{ symbol }}{{ max }}</span>
      <span v-else class="font-bold text-green-500">{{ max }}{{ symbol }}</span>
      <span class="font-medium">&nbsp;max discount</span>
    </div>
    <div class="text-left text-sm mt-2">
      <span v-if="symbol === '$'" class="font-bold text-green-500">{{ symbol }}{{ average }}</span>
      <span v-else class="font-bold text-green-500">
        {{ average }}{{ symbol }}
      </span>
      <span class="font-medium">&nbsp;average discount </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  symbol: {
    type: String,
    default: "$",
    validator: value => ["$", "%", "€"].includes(value),
  },
  total: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 0,
  },
  average: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "blue",
    validator: value =>
      ["blue", "green", "red", "yellow", "orange"].includes(value),
  },
});
</script>
