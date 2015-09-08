<template>
  <div class="card flex flex-wrap">
    <div class="m-5">
      <div class="shadow-default w-[150px] h-[50px]"></div>
      <p>shadow</p>
    </div>
    <div class="m-5">
      <div class="shadow-sm 2-[150px] h-[50px]"></div>
      <p>shadow-small</p>
    </div>

    <!-- blur -->
    <div class="m-5">
      <div class="flex relative">
        <div
          class="custom-blur w-[100px] h-[50px] bg-white-dark-alpha-78"
        ></div>
        <div
          class="w-[50px] h-[50px] bg-gradient-to-tl from-base to-base-dark-20"
        ></div>
      </div>
      <p>blur</p>
    </div>

    <div class="m-5">
      <div class="flex relative">
        <div
          class="custom-blur w-[100px] h-[50px] bg-white-dark-alpha-78"
        ></div>
        <div
          class="w-[50px] h-[50px] bg-gradient-to-tl from-base to-base-dark-20"
        ></div>
      </div>
      <p>blur</p>
    </div>
  </div>
</template>

<style>
.custom-blur::after {
  content: "";
  position: absolute;
  /* filter: blur(5px); */
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-right: 50px solid transparent;
  border-top: 50px solid rgba(240, 240, 240);
  border-bottom: transparent;
}
p {
  padding-top: 8px;
}
</style>
