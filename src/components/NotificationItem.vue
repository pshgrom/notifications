<template>
  <component :is="item.type" :item="item" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Notification from "@/types/Notification";
import FriendSuggestion from "@/components/FriendSuggestion.vue";
import LinkShared from "@/components/LinkShared.vue";
import VideoPosted from "@/components/VideoPosted.vue";

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

<style lang="scss">
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

    &__link {
      a {
        display: block;
        text-decoration: underline;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
