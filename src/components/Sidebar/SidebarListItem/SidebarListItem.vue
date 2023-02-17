<script setup>

import SidebarListItemLink from "./SidebarListItemLink/SidebarListItemLink.vue"
import ChannelManager from "../../ChannelManager/ChannelManager.vue"
import ChannelEditor from "../../ChannelEditor/ChannelEditor.vue"
import {computed, reactive} from "vue"

const { accordionItem } = defineProps({
  accordionItem: {
    type: Object,
    default: () => null
  }
})

const state = reactive({
  isOpenEditor: false,
  isOpenManager: false,
  isActiveAccordion: true
})

const onCloseManager = () => state.isOpenManager = false
const onCloseEditor = () => state.isOpenEditor = false

const showAccordion = computed(() => {
  return state.isActiveAccordion && accordionItem.childsList.length
})

</script>

<template>
  <li class="relative">
    <div
        @click="state.isActiveAccordion = !state.isActiveAccordion"
        class="font-bold flex items-center text-sm py-4 px-6 h-12 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer">
      <fa
          :class="showAccordion ? 'rotate-90' : 'rotate-0'"
          icon="angle-right"
          class="mr-2 transition duration-200 ease-in-out"/>
      <span>{{accordionItem.name}}</span>
      <div
          v-if="accordionItem.custom"
          class="ml-auto">
        <fa
          icon="ellipsis"
          @click.stop="state.isOpenManager = !state.isOpenManager"/>
        <channel-manager
          v-if="state.isOpenManager"
          ref="chanel-manages"
          v-closable="{ exclude: ['chanel-manages'], handler: onCloseManager }"
          :accordionItem="accordionItem"
          @close="state.isOpenManager = false"
        />
      </div>
      <div
          class="ml-3" v-if="accordionItem.custom">
        <fa icon="plus" @click.stop="state.isOpenEditor = !state.isOpenEditor"/>
        <channel-editor
          v-if="state.isOpenEditor"
          ref="chanel-editor"
          v-closable="{ exclude: ['chanel-editor'], handler: onCloseEditor }"
          :accordionItem="accordionItem"
          @close="state.isOpenEditor = false"
        />
      </div>
    </div>
    <ul
        v-if="showAccordion"
        class="relative">
      <sidebar-list-item-link
        v-for="child in accordionItem.childsList"
        :key="child.id"
        :child="child"
      />
    </ul>
  </li>
</template>
