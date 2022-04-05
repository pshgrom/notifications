<template>
  <div class="content">
    <div class="content__link">
      <a :href="content" target="_blank">Ссылка</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import Notification from "@/types/Notification";

export default defineComponent({
  name: 'LinkShared',
  props: {
    currentNotification: {
      type: Object as PropType<Notification>
    }
  },
  setup(props) {
    const content = ref(props.currentNotification?.content)

    return {
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
      text-decoration: underline;
    }
  }
}
</style>
