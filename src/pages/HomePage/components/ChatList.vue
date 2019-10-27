<template>
  <div class="chatlist-container">
    <div class="chatlist-search"/>
    <div>
      <ul>
        <li class="chat-list" v-bind:key="index"  v-for="(contact, index) in contacts" >
          <ChatListItem v-bind:contact="contact"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ChatListItem from './ChatListItem'

export default {

  components: {
    ChatListItem
  },
  data() {
    return {
      contacts: [
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' }
      ]
    };
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.chatting-container {
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}
.chatlist-search {
  height: 50px;
  background-color: grey;
}
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>