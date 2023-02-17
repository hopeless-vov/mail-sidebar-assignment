<script setup>
import { ref, computed } from 'vue'
import ChannelManagerItem from "./ChannelManagerItem/ChannelManagerItem.vue"
import SearchBar from "../SearchBar/SearchBar.vue"

const { accordionItem } = defineProps({
  accordionItem: {
    type: Object,
    default: () => null
  },
})
  const search = ref('')
  const filteredChildList = computed(() => {
    return accordionItem.childsList.filter(el => el.text.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <div
    @click.stop
    class="z-10 absolute bg-white rounded-lg shadow w-64 grid pt-5">
    <span class="text-center">{{accordionItem.name}}</span>

    <search-bar class="mx-4 my-2" v-model:search="search" @update:modelValue="search = $event"/>

    <ul class="py-2 text-sm text-gray-700 max-h-52 overflow-y-auto">
      <channel-manager-item
        v-for="item in filteredChildList"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>
