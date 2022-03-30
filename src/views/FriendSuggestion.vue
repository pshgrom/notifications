<template>
  <div class="content">
    <h1>Friend Suggestion</h1>
    <h3>{{ subTitle }}</h3>
    <div class="content__image">
      <img :src="content" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'FriendSuggestion',
  props: {
    currentNotification: {
      type: Object as PropType<Notification>
    }
  },
  setup(props) {
    const subTitle = ref(props.currentNotification?.subTitle)
    const content = ref(props.currentNotification?.content)

    return {
      subTitle,
      content
    }
  }
});
</script>

<style lang="scss">
 .content {
   &__image {
     max-width: 350px;
     margin: auto;

     img {
       max-width: 100%;
     }
   }
 }
</style>
