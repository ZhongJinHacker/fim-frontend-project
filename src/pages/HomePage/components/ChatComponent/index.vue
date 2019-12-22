<template>
  <div class="chat-home-container">
    <ChatList/>
    <div class= "chat-vertical-line"/>
    <ChatWindow/>
  </div>
</template>

<script>
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'

export default {
  name: "ChatComponent",
  components: {
    ChatList,
    ChatWindow
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.chat-home-container {
  display: flex;
  flex-direction: row;
  height: $home_page_height;
  width: $home_page_width;
  background-color: white;
}

.chat-vertical-line {
  width: 1px;
  background-color: gray;
  opacity: 0.3;
}
</style>