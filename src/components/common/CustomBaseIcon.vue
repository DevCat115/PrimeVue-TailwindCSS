<template>
  <img class="m-[25px]" :src="`src/assets/icons/${name}.svg`" :alt="name" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
