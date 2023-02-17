<script setup>
import {defineEmits} from "vue"

const {item} = defineProps({
  item: {
    type: Object,
    default: () => null
  }
})

const emit = defineEmits(['remove'])
const remove = () => {
  console.log('item', item.text)
  emit('remove', item)
}
</script>

<template>
  <li
      class="block flex px-4 py-2 hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out items-center cursor-default justify-between">
    <div class="flex gap-3.5 items-center">
      <fa
        class="cursor-grab"
        icon="grip-vertical"/>
      <div class="w-8 h-8 rounded bg-gray-100 p-2 flex items-center justify-center">
        <fa :icon="item.icon"/>
      </div>
      <span class="text-ellipsis whitespace-nowrap overflow-hidden w-36">{{item.text}}</span>
    </div>
    <button @click="remove">
      Remove
    </button>
  </li>
</template>
