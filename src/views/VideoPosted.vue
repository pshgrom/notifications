<template>
  <div class="content">
    <h1>Video Posted</h1>
    <h3>{{ subTitle }}</h3>
    <button style="margin-bottom: 20px" @click="action">Пожаловаться</button>
    <div class="content__video">
      <iframe width="350" height="300"
        :src="content">
      </iframe>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'VideoPosted',
  props: {
    currentNotification: {
      type: Object as PropType<Notification>
    }
  },
  setup(props) {
    const subTitle = ref(props.currentNotification?.subTitle)
    const content = ref(props.currentNotification?.content)

    const action = ():void => {
      console.log('complaint')
    }

    return {
      subTitle,
      content,
      action
    }
  }
});
</script>

<style lang="scss">
.content {
  &__video {
    display: flex;
    justify-content: center;
  }
}
</style>
