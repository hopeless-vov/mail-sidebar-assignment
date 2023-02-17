import { defineStore } from 'pinia'
import { ref } from 'vue'
import {channelsChild, inboxChild, personalChild, teamsChild} from "../data/index.js";

export const useStore = defineStore('store', () => {

  const accordionList = ref([
    {
      name: 'Inbox',
      childsList: inboxChild
    },
    {
      name: 'Personal',
      childsList: personalChild
    },
    {
      name: 'Teams',
      childsList: teamsChild
    },
    {
      name: 'Channels',
      custom: true,
      childsList: channelsChild
    }
  ])

  const editChannels = (value) => {
    accordionList.value = accordionList.value.map(el => (
      el.name === value.name ? {
        ...el,
        ...value
      } : el
    ))
  }

  const setManagerItems = ({field, link, name = 'Channels', value}) => {
    const index = accordionList.value.findIndex(el => el.name === name)
    const childIndex = accordionList.value[index].childsList.findIndex(el => el.link === link)
    accordionList.value[index].childsList[childIndex][field] = value
  }


  return { accordionList, setManagerItems, editChannels }
})
