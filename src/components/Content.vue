<script setup>
import Image from 'primevue/image';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';
import Galleria from 'primevue/galleria';
import { ref, onMounted } from "vue";

import { PhotoService } from '/src/service/PhotoService.js'

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
</script>

<template>
  <Image src="src/assets/banner.png" alt="Banner" width="100%" />

  <br>
  <br>
  <br>
  <br>
  <br>

  <div style="display:flex " class="ml-auto w-11">
    <Card
      :pt="{
          root:'ml-8 w-4 bg-black-alpha-90',
     }"
  >
    <template #title>Joe’s Barbershop</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor purus ante, et tempor augue fringilla at. Maecenas vel lorem fringilla, consequat erat eu, efficitur metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis diam ex. Duis condimentum porttitor ex, sed pellentesque lectus feugiat porttitor. Sed libero mauris, suscipit vel massa id, rutrum luctus felis. Nunc et congue neque. Duis suscipit dolor quis lorem pharetra fringilla.
      </p>
    </template>
  </Card>
    <Skeleton
        :pt="{
          root:'ml-8 surface-200'
        }"
        width="50rem" height="30rem"></Skeleton>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>

  <div style="display:flex " class="ml-auto w-11">
    <Skeleton
        :pt="{
          root:'ml-8 surface-200'
        }"
        width="50rem" height="30rem"></Skeleton>
    <Card
        :pt="{
          root:'ml-8 w-4 bg-black-alpha-90',
     }"
    >
      <template #title>Joe’s Barbershop</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor purus ante, et tempor augue fringilla at. Maecenas vel lorem fringilla, consequat erat eu, efficitur metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed iaculis diam ex. Duis condimentum porttitor ex, sed pellentesque lectus feugiat porttitor. Sed libero mauris, suscipit vel massa id, rutrum luctus felis. Nunc et congue neque. Duis suscipit dolor quis lorem pharetra fringilla.
        </p>
      </template>
    </Card>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>

  <!--  Gallery-->
  <div class="w-full pb-5 bg-black-alpha-90	">
    <h1 class="text-white pt-5">Gallery</h1>
    <div class="card flex justify-center justify-content-center">
      <Galleria
          :pt="{
            root:'w-full'
          }"
          v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
                containerStyle="max-width: 900px" :circular="true" :fullScreen="true" :showItemNavigators="false" :showThumbnails="false">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>

      <div v-if="images" class="grid grid-cols-12 gap-4" style="max-width: 400px">
        <div v-for="(image, index) of images" :key="index" class="col-span-4">
          <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1 class="">Find Us</h1>
    <div class="flex justify-content-center p-4 ">
      <div class="m-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.265614144943!2d23.787469898260888!3d38.00082045228079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a19995d72be2bf%3A0xd30f3e149a5841bf!2sJoe%E2%80%99s%20Barbershop!5e0!3m2!1sel!2sgr!4v1719101396821!5m2!1sel!2sgr"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        <Card
            :pt="{
          root:'w-3 bg-black-alpha-90',
        }"
        >
          <template #title></template>
          <template #content>
            <p class="m-0">
              <i class="pi pi-map-marker"></i> Υμμητού 1, Athens, Greece 15561
            </p>
            <p>
              <i class="pi pi-phone"></i> 2106525504
            </p>
          </template>
        </Card>
    </div>
  </div>

</template>

<style scoped>

</style>