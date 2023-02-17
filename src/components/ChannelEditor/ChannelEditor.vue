<script setup>
import { reactive, onMounted, defineEmits} from 'vue'
import ChannelEditorItem from "./ChannelEditorItem/ChannelEditorItem.vue"
import ChannelEditorCreate from "./ChannelEditorCreate/ChannelEditorCreate.vue"
import { VueDraggableNext } from 'vue-draggable-next'
import {useStore} from "../../store/index.js"
const { accordionItem } = defineProps({
  accordionItem: {
    type: Object,
    default: () => null
  },
})

onMounted(() => {
  childItems.list = [...accordionItem.childsList]
})

const store = useStore()
const { editChannels } = store

const childItems = reactive({
  list: []
})

const emit = defineEmits(['close'])

const create = ({text}) => {
  childItems.list.push({
    text,
    icon: 'envelope',
    count: 0,
    notification: true,
    switcher: true,
    link: 'chat-' + Math.random(),
  })
}
const cancel = () => {
  childItems.list = accordionItem.childsList
  emit('close')
}
const apply = () => {
  editChannels({
    name: accordionItem.name,
    childsList: [...childItems.list]
  })
  emit('close')
}
const remove = (val) => {
  childItems.list.splice(val.index, 1)
}
</script>

<template>
  <div
      @click.stop
      class="z-10 absolute bg-white rounded-lg shadow w-80 grid pt-5">
    <span class="text-center">{{accordionItem.name}}</span>

    <channel-editor-create
        @create="create"
        class="mx-4 my-2" />

    <VueDraggableNext class="max-h-52 overflow-y-auto" :list="childItems.list">
      <channel-editor-item
          v-for="(item, index) in childItems.list"
          :key="item.id"
          :item="{...item, index}"
          @remove="remove"
      />
    </VueDraggableNext>

    <div class="mx-4 my-2 flex justify-end gap-5">
      <button
          @click="cancel"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-full">
        Cancel
      </button>
      <button
          @click="apply"
          class="bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded-full">
        Apply
      </button>
    </div>

  </div>
</template>
