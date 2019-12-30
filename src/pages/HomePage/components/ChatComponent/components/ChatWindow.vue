<template>
  <div class="chat-window-container">
    <div class="chat-window-title">{{ currentChatFriendNickName }}</div>
    <div class="chat-window-divider" />
    <div class="chat-window-record">
      <ul ref='chatDetailList' class="chat-window-ul">
        <li v-for="(record, i) in records" :key="i">
          <LeftChatItem v-if="record.isMe == false" :msg="record.msg" />
          <RightChatItem v-else :msg="record.msg"/>
        </li>
      </ul>
    </div>
    <div class="chat-window-divider" />
    <div class="chat-window-input">
      <ChatInputWindow @msgSend="onSendMsg" />
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
  },
  data () {
    return {
      records: []
    }
  },
  computed: {
    currentChatFriendId () {
      return this.$store.state.user.currentChatFriendId
    },
    currentChatFriendNickName () {
      return this.$store.state.user.currentChatFriendName
    }
  },
  watch: {
    currentChatFriendId (newFriendId, oldFriendId) {
      console.log('ChatWindow: currentChatFriendId: ' + newFriendId)
      this.getChatRecord(newFriendId)
    }
  },
  methods: {
    onSendMsg () {
      this.listScrollBottom()
    },
    listScrollBottom () {
      this.$nextTick(() => {
        var divDom = this.$refs.chatDetailList
        divDom.scrollTop = divDom.scrollHeight
      })
    },
    async getChatRecord (friendId) {
      const self = this
      const chatRecordBo = { userId: this.$store.state.login.userId, friendId: friendId }
      this.$store.dispatch('CHAT_RECORD', chatRecordBo)
        .then(
          () => {
            console.log('获取chat_record成功： ---》')
            self.records = self.$store.state.user.chatRecordMap.get(friendId)
            console.log('获取chat_record成功： ' + self.records)
            self.listScrollBottom()
          }
        )
        .catch(
          () => {

          }
        )
    }
  },
  mounted () {
    if (this.currentChatFriendId === null || this.currentChatFriendId === '') {
      return
    }
    this.getChatRecord(this.currentChatFriendId)
  }
}
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
.chat-window-ul {
  overflow-y:scroll;
  height: 100%;
}
</style>
