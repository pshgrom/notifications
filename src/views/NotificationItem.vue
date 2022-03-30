<template>
  <div class="notification-item" @click="showMoreInfo">
    <div class="notification-item__left">
      <div class="notification-item__image">
        <img :src="item.thumbnailUrl" alt="">
      </div>
    </div>
    <div class="notification-item__right">
      <div class="notification-item__title">
        {{ item.mainTitle }}
      </div>
      <div class="notification-item__subtitle">
        {{ item.subTitle }}
      </div>
    </div>
    <div class="notification-item__mark" :class="{'notification-item__mark_check': item.seen}"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import Notification from "@/types/Notification";
import {NOTIFICATION_TYPE} from "@/enums/NotificationEnum";

export default defineComponent({
  name: "NotificationItem",
  props: {
    item: {
      type: Object as PropType<Notification>
    }
  },
  setup(props, {emit}) {

    const showMoreInfo = (): void => {
      emit('update:seen', true)
      let type = ''
      switch (props.item?.type) {
        case NOTIFICATION_TYPE.FRIEND_SUGGESTION:
          type = 'FriendSuggestion'
          break
        case NOTIFICATION_TYPE.VIDEO_POSTED:
          type = 'VideoPosted'
          break
        case NOTIFICATION_TYPE.LINK_SHARED:
          type = 'LinkShared'
          break
      }
      emit('updateCurrentType', type, props.item)
    }

    return {
      showMoreInfo,
    }
  }
})
</script>

<style scoped lang="scss">
  .notification-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px;
    transition: background-color .15s ease-in;
    cursor: pointer;
    border-radius: 5px;
    position: relative;

    &__right {
      max-width: 200px;
    }

    &__mark {
      &:after {
        content: '';
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(blue, .5);
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      &_check {
        display: none;
      }
    }

    &__left {
      margin-right: 15px;
    }

    &__image {
      max-width: 60px;
      width: 100%;
      font-size: 0;

      img {
        max-width: 100%;
        border-radius: 50%;
      }
    }

    &:hover {
      background: rgba(0,0,0, .1);
    }
  }
</style>
