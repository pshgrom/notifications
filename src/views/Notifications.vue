<template>
  <div class="notifications">
    <div class="notifications__wrapper">
      <div class="notifications__top">
        <h1>Notifications</h1>
      </div>
      <div class="notifications-list">
        <div
          v-for="item in allNotifications"
          :key="item.id"
        >
          <notification-item
            :item="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import NotificationItem from '../components/NotificationItem.vue'
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'Notifications',
  components: {
    NotificationItem,
  },
  setup() {
    const store = useStore()

    const allNotifications = computed<Notification[]>(() => store.getters.allNotifications)

    return {
      allNotifications,
    }
  }
});
</script>

<style lang="scss">
  .notifications {
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__button{
      font-size: 14px;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      border: none;
      transition: all .15s ease-in;
      margin: 10px;
      min-width: 120px;

      &_active {
        background: rgba(blue, .5);
        color: #fff;
      }
    }

    &-list {
      padding: 15px;
      overflow-y: scroll;
      max-height: 500px;
    }
  }
</style>
