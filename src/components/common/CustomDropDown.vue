<template>
  <Dropdown
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    placeholder="Select a City"
    class="w-full md:w-[14rem]"
    showClear
  >
    <template #dropdownicon>
      <img
        src="@/assets/icons/chevron-selector-vertical.svg"
        alt="Custom Icon"
        class="w-5 h-5"
      />
    </template>
  </Dropdown>
</template>

<script setup>
import { ref, defineProps } from "vue";

const selectedCity = ref();

const props = defineProps({
  cities: {
    type: Array,
    required: true,
  },
});
</script>
