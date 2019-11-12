<template>
<div class="right-chat-li">
  <img class="item-avatar" src="@/assets/iconfont/avatar.png"/>
  <label class="right-chat-content">{{ msg }}</label>
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
.right-chat-li {
  display: flex;
  flex-direction: row-reverse;
}
.right-chat-content {
  background-color: bisque;
  border-radius: 3px;
  margin: auto 1px;
}
</style>