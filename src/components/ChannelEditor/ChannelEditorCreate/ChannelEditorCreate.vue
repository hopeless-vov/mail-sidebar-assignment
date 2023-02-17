<script setup>
import {defineEmits, ref} from "vue"

const {} = defineProps({
})

const text = ref('')
const emit = defineEmits(['create'])
const createChannel = () => {
  emit('create', {
    text: text.value
  })
  text.value = ''
}
</script>

<template>
  <form
      @submit.prevent="createChannel"
      class="flex items-center">
    <label class="sr-only">Add Channel</label>
    <div class="relative w-full">
      <input
          v-model="text"
          type="text"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-4 focus:border-blue-500"
          placeholder="Add Channel"
          required>
    </div>
    <button
        type="submit"
        class="p-1.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add
    </button>
  </form>
</template>
