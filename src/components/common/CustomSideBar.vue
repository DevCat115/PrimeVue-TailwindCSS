<template>
  <div class="card flex justify-center">
    <Sidebar v-model:visible="visible" class="custom-sidebar">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="overflow-y-auto mt-4">
            <ul class="list-none px-4 m-0">
              <li>
                <ul class="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-home mr-2"></i>
                      <span class="font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-bookmark mr-2"></i>
                      <span class="font-medium">Bookmarks</span>
                    </a>
                  </li>

                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">Team</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-comments mr-2"></i>
                      <span class="font-medium">Messages</span>
                      <span
                        class="inline-flex items-center justify-center ml-auto bg-primaryrounded-full w-6 h-6 text-surface-0 dark:text-surface-900"
                        >3</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-calendar mr-2"></i>
                      <span class="font-medium">Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a
                      v-ripple
                      class="flex items-center cursor-pointer p-3 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
                    >
                      <i class="pi pi-cog mr-2"></i>
                      <span class="font-medium">Settings</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <hr
              class="mb-3 mx-3 border-t-1 border-none border-surface-200 dark:border-surface-0"
            />
            <a
              v-ripple
              class="m-3 flex items-center cursor-pointer p-3 gap-2 rounded-md text-surface-0 dark:text-surface-0/80 hover:bg-white-alpha-20 dark:hover:bg-surface-0 duration-200 transition-colors"
            >
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
              <span class="font-bold">Amy Elsner</span>
            </a>
          </div>
        </div>
      </template>
    </Sidebar>
    <Button @click="visible = true"><i class="pi pi-bars"></i></Button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
