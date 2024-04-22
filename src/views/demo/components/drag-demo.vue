<template>
  <!-- 可拖拽demo小组件 -->
  <div class="drag">
    <transition-group name="drag" class="list" tag="ul">
      <li v-for="item, index in liList" :key="index" @dragstart="dragstart(index)" @dragenter="dragenter($event, index)" @dragover.prevent
        draggable="true">
        {{ item.label }}</li>
    </transition-group>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
const liList = [
  { label: "列表1" },
  { label: "列表2" },
  { label: "列表3" },
  { label: "列表4" },
  { label: "列表5" },
  { label: "列表6" },
]
// var dragIndex = ref('')
let dragIndex = 0
const dragstart = (index) => {
  dragIndex = index
}
const dragenter = (e, index) => {
  console.log(e,"eeeeee");
  if (dragIndex !== index) {
    const moving = liList[dragIndex];
    liList.splice(dragIndex, 1);
    liList.splice(index, 0, moving);
    // 排序变化后目标对象的索引变成源对象的索引
    dragIndex = index;
  }
}
</script>
<style lang="scss" scoped>
.drag {
  margin: 40px 0;
  width: 100%;

  li {
    width: 100%;
    height: 50px;
    background-color: #f70;
    color: #fff;
    border-radius: 5px;
    text-align: center;
  }
}
</style>
