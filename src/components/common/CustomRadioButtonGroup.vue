<template>
  <div class="flex justify-start">
    <div class="flex flex-col gap-3">
      <div
        v-for="category in categories"
        :key="category.key"
        class="flex items-center"
      >
        <RadioButton
          v-model="selectedCategory"
          :inputId="category.key"
          name="dynamic"
          :value="category.name"
        />
        <label :for="category.key" class="ml-2">{{ category.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const selectedCategory = ref("Production");

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
</script>
