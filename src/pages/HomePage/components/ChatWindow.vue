<template>
  <div class="chat-window-container">
    <div class="chat-window-title">测试号</div>
    <div class="chat-window-divider" />
    <div class="chat-window-record">
      <ul>
        <LeftChatItem/>
        <LeftChatItem/>
        <RightChatItem/>
      </ul>
    </div>
    <div class="chat-window-divider" />
    <!-- <div>输入框</div> -->
    <div class="chat-window-input">
      <ChatInputWindow />
    </div>
  </div>
</template>

<script>
import LeftChatItem from './LeftChatItem.vue'
import RightChatItem from './RightChatItem.vue'
import ChatInputWindow from './ChatInputWindow.vue'
export default {
  components: {
    LeftChatItem,
    RightChatItem,
    ChatInputWindow
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/styles/common.scss";

.chat-window-container {
  height: 100%;
  width: $chat-window-width;
  display: flex;
  flex-direction: column;
}
.chat-window-title {
  height: 54px;
}
.chat-window-record {
  height: 300px;
}
.chat-window-divider {
  height: 1px;
  width: 100%;
  background-color: grey;
  opacity: 0.3;
}
.chat-window-input {
  background-color: red;
  flex: 1;
}
</style>