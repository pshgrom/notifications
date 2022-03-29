<template>
  <div class="content">
    <h1>Friend Suggestion</h1>
    <h3>{{ subTitle }}</h3>
    <div class="content__link">
      <a :href="content" target="_blank">Ссылка</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'LinkShared',
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
  &__link {
    a {
      display: block;
    }
  }
}
</style>
