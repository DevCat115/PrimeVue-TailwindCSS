<template>
  <h1 class="text-4xl text-center">Second Page</h1>
  <div class="m-[50px] card">
    <!-- Mini Icon Button -->
    <div class="p-5">
      <MiniIconButton
        color="rgba(25, 43, 68, 1)"
        class="hover:bg-black-alpha-6"
      />
      <MiniIconButton
        color="rgba(25, 43, 68, 1)"
        class="ml-5 border shadow-sm hover:bg-[white]"
      />
    </div>

    <!-- Radio Button -->
    <CustomRadioButton :categories="radiocategories" />

    <!-- CheckBox -->

    <CustomCheckBoxGroup :categories="checkBoxCategories" />

    <!-- Button Group -->
    <div class="mt-5">
      <!-- set bg-color and showIcon as true or false -->

      <CustomButtonField label="Button" :isShowIcon="false" class="m-5" />

      <CustomButtonField
        label="Button"
        :isShowIcon="false"
        outlined
        severity="secondary"
        labelColor="rgba(var(--black-10))"
        class="m-5"
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="false"
        outlined
        labelColor="rgba(var(--red-dark))"
        severity="danger"
        class="m-5"
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="false"
        class="m-5"
        disabled
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="false"
        class="m-5"
        severity="secondary"
        disabled
        outlined
      />

      <CustomButtonField label="Button" :isShowIcon="true" class="m-5" />

      <CustomButtonField
        label="Button"
        :isShowIcon="true"
        severity="secondary"
        iconColor="rgba(var(--black-10))"
        class="m-5"
        outlined
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="true"
        severity="danger"
        iconColor="rgba(var(--red-dark))"
        class="m-5"
        outlined
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="true"
        class="m-5"
        disabled
      />

      <CustomButtonField
        label="Button"
        :isShowIcon="true"
        severity="secondary"
        iconColor="rgba(var(--black-10))"
        class="m-5"
        outlined
        disabled
      />
    </div>

    <!-- DropDown -->
    <CustomDropDown :cities="cities" editable />

    <!-- SideBar -->
    <div class="mt-5">
      <CustomSideBar />
    </div>

    <div class="mt-5">
      <!-- <CustomMenuBar /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MiniIconButton from "@/components/common/MiniIconButton.vue";
import CustomButtonField from "@/components/common/CustomButtonField.vue";
import CustomDropDown from "@/components/common/CustomDropDown.vue";
import CustomRadioButton from "../../common/CustomRadioButtonGroup.vue";
import CustomCheckBoxGroup from "../../common/CustomCheckBoxGroup.vue";
import CustomSideBar from "../../common/CustomSideBar.vue";
// import CustomMenuBar from "../../common/CustomMenuBar.vue";

const radiocategories = ref([
  { name: "Radio", key: "R1" },
  { name: "Radio1", key: "R2" },
]);

const checkBoxCategories = ref([
  { name: "Tag1", key: "CheckBox1", color: "base" },
  { name: "Tag2", key: "CheckBox2", color: "indigo-dark" },
  { name: "Tag3", key: "CheckBox3", color: "red-dark" },
  { name: "Tag4", key: "CheckBox4", color: "green-dark" },
]);

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
