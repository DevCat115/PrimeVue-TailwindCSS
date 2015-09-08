<template>
  <div class="mt-5 flex flex-col gap-3">
    <div
      v-for="category in categories"
      :key="category.key"
      class="flex items-center"
    >
      <Checkbox
        class="flex items-center custom-checkbox checked:bg-red"
        v-model="selectedCategories"
        :inputId="category.key"
        name="dynamic"
        :value="category.name"
        :class="getCheckboxClass(category.color)"
      />
      <label
        :for="category.key"
        :class="getLabelClass(category.color)"
        class="ml-2"
        >{{ category.name }}</label
      >
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const selectedCategories = ref(["Accounting"]);

const getCheckboxClass = (color) => {
  const finalColor = "purple-dark";
  return `checked:bg-${finalColor} checked:border-${finalColor} focus:ring-${finalColor}`;
};

const getLabelClass = (color) => {
  const finalColor = "purple-dark";
  return `text-${finalColor}`;
};
</script>

<style>
.custom-checkbox input[type="checkbox"]:checked {
  background-color: inherit;
  color: inherit;
}
.custom-checkbox input[type="checkbox"]:checked:focus {
  color: inherit;
  background-color: inherit;
}
</style>
