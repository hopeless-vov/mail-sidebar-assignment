<script setup>
import { defineEmits } from 'vue'

const { value } = defineProps({
  value: {
    type: Object,
    default: () => null
  },
})

const emit = defineEmits(['setNotification'])
const setNotification = () => emit('setNotification')

</script>

<template>
  <div
      @click="setNotification"
      :class="value ? 'mr-2' : 'mr-1.5'"
      class="ml-auto cursor-pointer">
    <fa
        v-if="value"
        icon="bell"
        class="ml-auto"/>
    <fa
        v-else
        icon="bell-slash"
        class="ml-auto"/>
  </div>
</template>
