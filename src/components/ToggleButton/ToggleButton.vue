<script setup>
import { defineEmits } from 'vue'

const { value } = defineProps({
  value: {
    type: Boolean,
    default: () => false
  }
})

const emit = defineEmits(['toggle'])
const toggle = () => emit('toggle')
</script>

<template>
  <div
      class="w-5 h-3 flex items-center bg-gray-300 rounded-full duration-300 cursor-pointer"
      :class="{ 'bg-green-500': value }"
      :aria-checked="value.toString()"
      @click="toggle"
  >
    <div
        class="bg-white w-2 h-2 rounded-full shadow-md transform duration-300 mr-1"
        :class="value ? 'translate-x-2.5' : 'translate-x-0.5'"
    ></div>
  </div>
</template>
