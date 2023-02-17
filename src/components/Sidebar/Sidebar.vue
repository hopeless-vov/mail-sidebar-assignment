<script setup>
import SidebarListItem from "./SidebarListItem/SidebarListItem.vue"
import { useStore } from  "../../store/index.js"
import {storeToRefs} from "pinia"


const store = useStore()
const { accordionList } = storeToRefs(store)

</script>

<template>
  <div class="w-60 h-full shadow-md bg-white absolute">
    <ul class="relative">
      <sidebar-list-item
        v-for="accordionItem in accordionList"
        :key="accordionItem.id"
        :accordionItem="accordionItem"/>
    </ul>
  </div>
</template>
