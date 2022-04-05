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
      <component :is="item.type" :currentNotification="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Notification from "@/types/Notification";
import FriendSuggestion from "@/views/FriendSuggestion.vue";
import LinkShared from "@/views/LinkShared.vue";
import VideoPosted from "@/views/VideoPosted.vue";

export default defineComponent({
  name: "NotificationItem",
  components: {
    FriendSuggestion,
    LinkShared,
    VideoPosted
  },
  props: {
    item: {
      type: Object as PropType<Notification>
    }
  },
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

    &__wrap {
     max-width: 200px;
    }

    &__right {
      display: flex;
      align-items: center;
      width: 348px;
      justify-content: space-between;
    }

    &__left {
      margin-right: 15px;
      min-width: 60px;
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
  }
</style>
