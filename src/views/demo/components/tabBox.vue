<template>
  <div>
    <h1>{{ title }}</h1>
    <var-button type="danger" @click="emitHandler()">点击事件</var-button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps,defineEmits } from 'vue'
defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
const emit=defineEmits(['change'])
const obj = {
  name: 'varlet',
  age: 18,
  height:170
}
const emitHandler = () => {
  emit('change', obj)
}

</script>
<style lang='scss' scoped></style>