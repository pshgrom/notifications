<template>
  <div class="notifications">
    <div class="notifications__top">
      <h1>Notifications</h1>
      <div>
        <button
          class="notifications__button"
          :class="{'notifications__button_active': activeFullInfo}"
          @click="showFullNotifications(true)"
        >All</button>
        <button
          class="notifications__button"
          :class="{'notifications__button_active': !activeFullInfo}"
          @click="showFullNotifications(false)"
        >Unread</button>
      </div>
    </div>
    <div class="notifications-list">
      <template v-if="allNotifications.length">
        <div
          v-for="item in allNotifications"
          :key="item.id"
        >
          <notification-item v-if="!item.seen" :item="item" v-model:seen="item.seen"/>
          <notification-item v-else :item="item" v-model:seen="item.seen"/>
        </div>
      </template>
      <template v-else>
        <p>
          Нет непрочитанных сообщений
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import NotificationItem from './NotificationItem.vue'
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'Notifications',
  components: {
    NotificationItem
  },
  setup() {
    const store = useStore()
    const allNotifications = ref<Notification[]>([])
    const activeFullInfo = ref<boolean>(true)

    const allNotificationsDefault = computed<Notification[]>(() => store.getters.allNotifications)

    const showFullNotifications = (value: boolean): void => {
      allNotifications.value = value ?  allNotificationsDefault.value : allNotificationsDefault.value.filter((item: Notification) => !item.seen)
      activeFullInfo.value = value
    }

    onMounted(() => {
      showFullNotifications(true)
    })

    return {
      allNotifications,
      activeFullInfo,
      showFullNotifications
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
      margin: 0 10px;
      transition: all .15s ease-in;

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
