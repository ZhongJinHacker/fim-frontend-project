<template>
  <div class="chat-input-container">
    <textarea  style="resize:none;border:0;outline:none;" class="chat-input" />
    <el-button type="success" class="chat-input-send-button">发送</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.chat-input-container {
  width: 100%;
  height: 100%;
}
.chat-input {
  width: 100%;
  height:100%;
  border-width: 0px;
  padding: 0px;
}
.chat-input-send-button {
  position: relative;
  top: -50px;
  right: -420px;
  width: 80px;
  height: 40px;
}
</style>