<template>
  <div class="chat-window-container">
    <div class="chat-window-title">{{ currentChatFriendName }}</div>
    <div class="chat-window-divider" />
    <div class="chat-window-record">
      <ul ref='chatDetailList' class="chat-window-ul">
        <li v-for="(record, i) in records" :key="i">
          <LeftChatItem v-if="record.isMe == false" :msg="record.message" />
          <RightChatItem v-else :msg="record.message"/>
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
    currentChatFriendName () {
      return this.$store.state.user.currentChatFriendName
    }
  },
  watch: {
    currentChatFriendName (newFriendName, oldFriendName) {
      console.log('ChatWindow: currentChatFriendId: ' + newFriendName)
      this.getChatRecord(newFriendName)
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
    async getChatRecord (newFriendName) {
      const self = this
      const chatRecordBo = { friendAccount: newFriendName, Authorization: this.$store.state.login.Authorization }
      this.$store.dispatch('CHAT_RECORD', chatRecordBo)
        .then(
          () => {
            console.log('获取chat_record成功： ---》')
            self.records = self.$store.state.user.chatRecordMap.get(newFriendName)
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
    if (this.currentChatFriendName === null || this.currentChatFriendName === '') {
      return
    }
    this.getChatRecord(this.currentChatFriendName)
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
