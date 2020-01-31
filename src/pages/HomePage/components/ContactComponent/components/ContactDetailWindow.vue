<template>
  <div class="contact-window-container">
    <img class="contact-window-avatar" src="@/assets/iconfont/avatar.png"/>
    <div class="contact-window-name">
      {{ currentContactName }}
    </div>
    <el-button type="success" class="contact-go-chat-button" @click="onGotoChatClick">与TA聊天</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    onGotoChatClick () {
      const contactBo = { contactName: this.currentContactName }
      this.$store.dispatch('GOTO_CHAT', contactBo)
      console.log('去和' + this.currentContactName + ' 聊天')
    }
  },
  computed: {
    currentContactName () {
      return this.$store.state.contact.currentContactName
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">

.contact-window-container {

}

.contact-window-avatar {

}

.contact-window-name {

}

.contact-go-chat-button {

}
</style>
