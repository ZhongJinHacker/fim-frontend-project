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
      //TODO:
      console.log('去和' + this.currentContactId + ' 聊天')
    }
  },
  computed: {
    currentContactId () {
      return this.$store.state.contact.currentContactId
    },
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
