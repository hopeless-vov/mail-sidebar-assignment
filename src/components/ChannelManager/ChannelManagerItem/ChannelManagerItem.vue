<script setup>
import ChannelManagerItemNotifications from "./ChannelManagerItemNotifications/ChannelManagerItemNotifications.vue"
import ToggleButton from "../../ToggleButton/ToggleButton.vue"
import {useStore} from "../../../store/index.js"

const { item } = defineProps({
  item: {
    type: Object,
    default: () => null
  }
})

const store = useStore()
const { setManagerItems } = store

const setManager = (field) => setManagerItems({
  field,
  value: !item[field],
  link: item.link
})
</script>

<template>
  <li class="block flex px-4 py-2 hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out items-center cursor-default">
    <span class="text-ellipsis whitespace-nowrap overflow-hidden w-40">{{item.text}}</span>
    <channel-manager-item-notifications :value="item.notification" @setNotification="setManager('notification')"/>
    <toggle-button :value="item.switcher" @toggle="setManager('switcher')"/>
  </li>
</template>
