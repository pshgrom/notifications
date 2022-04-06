<template>
  <div class="notification-item">
    <div class="notification-item__left">
      <div class="notification-item__image">
        <img :src="item.thumbnailUrl" alt="">
      </div>
    </div>
    <div class="notification-item__right">
      <div class="notification-item__wrap">
        <div class="notification-item__title">
          {{ item.mainTitle }}
        </div>
        <div class="notification-item__subtitle">
          {{ item.subTitle }}
        </div>
      </div>
      <div class="notification-item__content">
        <button class="notifications__button" @click="openPlayer">Открыть плеер</button>
        <button class="notifications__button" @click="action">Пожаловаться</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Notification from "@/types/Notification";
import {event} from "vue-gtag";

export default defineComponent({
  name: 'VideoPosted',
  props: {
    item: {
      type: Object as PropType<Notification>
    }
  },
  setup() {
    const action = ():void => {
      console.log('complaint')
      event('complaint', {
        method: 'Google',
        'event_category': 'complaint',
        'event_label': 'complaint',
        'value': 2
      })
    }

    const openPlayer = ():void => {
      console.log('open player')
      event('open-player', {
        method: 'Google',
        'event_category': 'open-player',
        'event_label': 'open-player',
        'value': 1
      })
    }

    return {
      action,
      openPlayer
    }
  }
});
</script>
