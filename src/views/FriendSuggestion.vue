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
import { defineComponent, ref } from 'vue';
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'FriendSuggestion',
  setup() {
    const route = useRoute()
    const subTitle = ref(route.params.subTitle)
    const content = ref(route.params.content)

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
