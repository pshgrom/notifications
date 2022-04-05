<template>
  <div class="content">
    <button class="notifications__button" @click="check">Просмотреть</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'FriendSuggestion',
  props: {
    currentNotification: {
      type: Object as PropType<Notification>
    }
  },
  setup() {

    const check = ():void => {
      console.log('check')
    }

    return {
      check,
    }
  }
});
</script>

<style lang="scss">
 .content {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
</style>
