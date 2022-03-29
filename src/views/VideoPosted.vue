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
import { defineComponent, ref } from 'vue';
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'VideoPosted',
  setup() {
    const route = useRoute()
    const subTitle = ref(route.params.subTitle)
    const content = ref(route.params.content)

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
