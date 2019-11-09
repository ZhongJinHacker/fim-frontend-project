<template>
<li class="right-chat-li">
  <div class="item-avatar">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-touxiang" />
    </svg>
  </div>
  <label class="right-chat-content">你好yayaya</label>
</li>
</template>

<script>
export default {

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