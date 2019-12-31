<template>
<div class="left-chat-li">
  <img class="item-avatar" src="@/assets/iconfont/avatar.png"/>
  <label class="left-chat-content">{{ msg }}</label>
</div>
</template>

<script>
export default {
  props: [
    'msg'
  ]
}
</script>

<style>
.left-chat-li {
  display: flex;
  flex-direction: row;
}
.left-chat-content {
  position: relative;
  background-color: darkseagreen;
  border-radius: 3px;
  margin: auto 1px;
}
</style>
