<template>
  <div class="chatlist-container">
    <div class="chatlist-search">
      <SearchWindow/>
    </div>
    <div class="item-devider" />
    <div>
      <ul>
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
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' },
        { userName: 'jim', lastMsg: '你好' }
      ]
    }
  },
  async mounted() {
    const userId = this.$store.state.user.userId
    const token = this.$store.state.user.token
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
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>