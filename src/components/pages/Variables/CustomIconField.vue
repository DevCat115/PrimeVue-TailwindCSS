<template>
  <div class="card mt-[100px]">
    <h1 class="text-4xl m-5">Icons</h1>
    <div class="flex flex-wrap gap-3">
      <CustomBaseIcon v-for="icon in iconNames" :key="icon" :name="icon" />
    </div>
  </div>
</template>

<script>
import CustomBaseIcon from "../../common/CustomBaseIcon.vue";

export default {
  components: {
    CustomBaseIcon,
  },
  data() {
    return {
      iconNames: [
        "command",
        "vertical",
        "user",
        "upload",
        "trash",
        "text",
        "team",
        "switch-up",
        "switch-down",
        "alert",
        "arrow-down-narrow",
        "arrow-down",
        "bar-chart-01",
        "bar-chart-02",
        "bar-chart-03",
        "battery-empty",
        "battery-full",
        "battery-low",
        "battery-mid",
        "calendar",
        "chart",
        "check",
        "check-circle",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-selector-vertical",
        "chevron-up",
        "clock",
        "close",
        "Cloud",
        "colours",
        "command",
        "computer",
        "cup",
        "dash",
        "device",
        "disconnect",
        "dots-1",
        "dots-2",
        "dots-3",
        "Drizzling",
        "drop",
        "drop-filled",
        "edit",
        "eye",
        "eye-off",
        "file",
        "filter",
        "grid",
        "home",
        "horizontal",
        "information",
        "layer",
        "layers",
        "loading",
        "minimise",
        "minus",
        "pen",
        "player",
        "plus",
        "printer",
        "Raining",
        "refresh",
        "refresh-2",
        "session",
        "settings",
        "shield",
        "snowflake",
        "square",
        "Storm",
        "Sunny",
        "",
      ],
    };
  },
};
</script>

<style></style>
