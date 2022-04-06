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
        <div class="notification-item__link">
          <a :href="content" target="_blank">Ссылка</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'LinkShared',
  props: {
    item: {
      type: Object as PropType<Notification>
    }
  },
  setup(props) {
    const content = ref(props.item?.content)

    return {
      content
    }
  }
});
</script>

