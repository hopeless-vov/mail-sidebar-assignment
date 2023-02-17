<script setup>
import {defineEmits} from "vue"

const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: () => ''
  }
})
const emit = defineEmits(['update:modelValue'])
const changeValue = (val) => emit('update:modelValue', val)
</script>

<template>
  <form class="flex items-center">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <input
          type="text"
          :modelValue="modelValue"
          @input="changeValue($event.target.value)"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4 focus:border-blue-500"
          placeholder="Search"
          required>
    </div>
  </form>
</template>
<!--
  смаколич ліквідаційна звітність фоп 3 група 5% єсв 1 місяць
  Дія витяг з державного реєстру
  закриття фопа доки витяг з держ реєстру
-->
