<template>
  <div class="content">
    <button class="notifications__button" @click="openPlayer">Открыть плеер</button>
    <button class="notifications__button" @click="action">Пожаловаться</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'VideoPosted',
  setup() {
    const action = ():void => {
      console.log('complaint')
    }

    const openPlayer = ():void => {
      console.log('open player')
    }

    return {
      action,
      openPlayer
    }
  }
});
</script>
