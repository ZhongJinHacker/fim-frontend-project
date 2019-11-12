<template>
  <div class="chatlist-container">
    <div class="chatlist-search">
      <SearchWindow/>
    </div>
    <div class="layout-devider" />
    <div class="chatlist-content">
      <ul class="chatlist-ul">
        <li class="chat-list" v-bind:key="index"  v-for="(chat, index) in chatList" >
          <ChatListItem v-bind:chat="chat"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ChatListItem from './ChatListItem'
import SearchWindow from './SearchWindow'
import { chatList } from '@/api/userRequest'
 

export default {

  components: {
    ChatListItem,
    SearchWindow
  },
  data() {
    return {
      chatList: [
        { userName: 'jim', lastMsg: '你好', friendId: '1001' },
        { userName: 'jim', lastMsg: '你好', friendId: '1002' },
        { userName: 'jim', lastMsg: '你好', friendId: '1003' },
        { userName: 'jim', lastMsg: '你好', friendId: '1004' },
        { userName: 'jim', lastMsg: '你好', friendId: '1005' },
        { userName: 'jim', lastMsg: '你好', friendId: '1006' },
        { userName: 'jim', lastMsg: '你好', friendId: '1007' }
      ]
    }
  },
  async mounted() {
    const userId = this.$store.state.login.userId
    const token = this.$store.state.login.token
    const response = await chatList({ userId, token })
    this.chatList = response.obj.chatList
    console.log('data--> ' + this.chatList[0])
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/styles/common.scss";

.chatlist-container {
  width: $home_contact_list_width;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
}
.chatlist-search {
  border-width: 0px;
  height: 50px;
}
ul {
  overflow-y:scroll;
}
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.chatlist-content {
  height: 100%;
}
.chatlist-ul {
  height: 100%;
}
.layout-devider {
  width: 100%;
  height: 1px;
  background-color: gray;
  margin-top: 10px;
  opacity: 0.3;
}
</style>