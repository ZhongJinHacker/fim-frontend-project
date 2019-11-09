<template>
<li class="left-chat-li">
  <div class="item-avatar">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-touxiang" />
    </svg>
  </div>
  <label class="left-chat-content">你好</label>
</li>
</template>

<script>
export default {
  props: {

  }
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