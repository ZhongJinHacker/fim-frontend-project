<template>
  <div class="chat-input-container">
    <textarea  style="resize:none;border:0;outline:none;" class="chat-input" v-model="msg"/>
    <el-button type="success" class="chat-input-send-button" @click="onSendClick">发送</el-button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      msg: ''
    }
  },
  methods: {
    onSendClick () {
      const self = this
      const currentFriendId = this.$store.state.user.currentChatFriendId
      const sendMsgBo = { userId: this.$store.state.login.userId, friendId: currentFriendId, msg: this.msg }
      this.$store.dispatch('SEND_MSG', sendMsgBo)
        .then(() => {
          self.msg = ''
          self.$emit('msgSend')
        })
      this.msg = ''
    }
  }
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