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
  data () {
    return {
      chatList: [
      ]
    }
  },
  async mounted () {
    const Authorization = this.$store.state.login.Authorization
    const response = await chatList({ Authorization })
    this.chatList = response.data.list
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
  height: 10%;
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
  height: 90%;
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
