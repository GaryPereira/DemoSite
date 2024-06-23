<script setup>
import { ref } from 'vue'
import Button from "primevue/button"
import Menubar from 'primevue/menubar';
import Badge from "primevue/badge";
import InputText from "primevue/badge";
import Avatar from "primevue/badge";
import Ripple from "primevue/ripple";
import Image from 'primevue/image';

import 'primeicons/primeicons.css';

const items = ref([
  {
    label: 'About',
    icon: 'pi pi-user'
  },
  {
    label: 'Services',
    icon: 'pi pi-list'
  },
  {
    label: 'Gallery',
    icon: 'pi pi-images',
  }
]);

</script>

<template>

<Menubar class="w-full" :model="items"
     :pt="{
          root:'bg-white',
          itemContent:'text-black-alpha-90',
          itemLink: 'bg-white-alpha-90 text-black-alpha-90',
          separator:'bg-white',
          itemLabel:'bg-white'
     }"
  >
    <template #start>
      <Image src="src/assets/LogoBlackVersion.png" alt="Logo" width="80" class="mr-5"/>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
        <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
    <template #end>

    </template>
  </Menubar>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<style module>
.header {
  width: 100%;
}
</style>