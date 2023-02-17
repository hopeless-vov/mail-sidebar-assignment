<script setup>

defineProps({
  child: {
    type: Object,
    default: () => null
  },
})
</script>

<template>
  <li class="relative flex text-gray-700 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer">
    <a :href="child.link"
      class="flex items-center content-center text-xs py-3 pl-10 pr-6 w-full">
      <fa
          :icon="child.icon"
          class="mr-2"/>
      <span class="text-ellipsis whitespace-nowrap overflow-hidden">{{child.text}}</span>
      <span class="ml-auto justify-end">{{child.count}}</span>
    </a>
  </li>
</template>
