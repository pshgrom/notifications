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
        <button class="notifications__button" @click="check">Просмотреть</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Notification from "@/types/Notification";
import {event} from "vue-gtag";

export default defineComponent({
  name: 'FriendSuggestion',
  props: {
    item: {
      type: Object as PropType<Notification>
    }
  },
  setup() {

    const check = ():void => {
      console.log('check')
      event('check', {
        method: 'Google',
        'event_category': 'check',
        'event_label': 'check',
        'value': 3
      })
    }

    return {
      check,
    }
  }
});
</script>
