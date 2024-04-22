<template>
  <div class="w-page">
    <nut-tabs v-model="value" direction="vertical" title-scroll style="height: 100%" name="tabName">
      <nut-tab-pane v-for="item in list" :key="item.value" :title="`${item.name}`" :pane-key="item.value">
        Content {{ item.name }}
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(0);
const list = [
  {
    name:"饮料酒水",
    value:0
  },{
    name:"生活用品",
    value:1
  },{
    name:"牛奶",
    value:2
  },{
    name:"保洁用品",
    value:3
  },{
    name:"厨房用品",
    value:4
  },{
    name:"床上用品",
    value:5
  },{
    name:"外套",
    value:6
  },{
    name:"鞋子",
    value:7
  },
]
</script>
<style lang='scss' scoped>
.w-page {
  height: 100%;
}
</style>