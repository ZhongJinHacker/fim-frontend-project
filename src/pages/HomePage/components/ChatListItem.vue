<template>
<div class="chat-item-container">
  <div class="item-container">
    <div class="item-avatar">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-touxiang" />
      </svg>
    </div>
    <div class="item-detail">
      <div class="name">
        {{ contact.userName }}
      </div>
      <div class="msg">
        {{ contact.lastMsg }}
      </div>
    </div>
  </div>
  <div class="item-devider" />
</div>
</template>

<script>
export default {

  props: ["contact"]
}
</script>

<style>
.chat-item-container {
  display: flex;
  flex-direction: column;
  height: 55px;
  margin-left: 2px;
  margin-right: 2px;
}
.item-container {
  display: flex;
  flex-direction: row;
  height: 50px;
}
.name {
  font-size: 16px
}
.msg {
  font-size: 12px
}
.item-devider {
  width: 100%;
  height: 1px;
  background-color: gray;
  margin-top: 4px;
  opacity: 0.3;
}
.item-detail {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
}
.item-avatar {
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-top: 10px;
}
</style>