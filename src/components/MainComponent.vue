<template>
  <div class="row h-100 w-100 m-0">
    <SideBar :images="imagesList" @titles="getTitles" :titleList="titleList" />
    <DrawArea :titleList="titleList" @titlesListUpdated="getUpdatedTitleList" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";

import SideBar from "./SideBar.vue";
import DrawArea from "./DrawArea.vue";

const imagesList = ref([]);

const titleList = ref([]);

const getTitles = (titles) => {
  titleList.value = titles;
};

const getUpdatedTitleList = (newTitleList) => {
  titleList.value = newTitleList;
};

onMounted(async () => {
  if (localStorage.getItem("titleList")) {
    console.log("we have list in local");
    titleList.value = JSON.parse(localStorage.getItem("titleList"));
  }

  try {
    await fetch("http://localhost:8000/images")
      .then((data) => data.json())
      .then((res) => (imagesList.value = res));
  } catch (e) {
    console.log("error", e);
  }
});
</script>
