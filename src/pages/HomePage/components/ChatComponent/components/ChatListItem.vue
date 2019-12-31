<template>
<div class="chat-item-container">
  <div class="detail-container" @click="onItemClick(chat)">
    <img class="item-avatar" src="@/assets/iconfont/avatar.png"/>
    <div class="item-detail">
      <div class="name">
        {{ chat.userName }}
      </div>
      <div class="msg">
        {{ chat.lastMsg }}
      </div>
    </div>
  </div>
  <div class="item-devider" />
</div>
</template>

<script>
export default {

  props: ['chat'],
  methods: {
    onItemClick (chat) {
      console.log('onItemClick: friendId: ' + chat.friendId)
      this.$store.dispatch('CHANGE_CHAT_FRIEND', { userName: chat.userName, friendId: chat.friendId })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.chat-item-container {
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
}
.detail-container {
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-top: 10px;
  margin-left: 5px;
}
.name {
  font-size: 16px
}
.msg {
  font-size: 12px
}
.item-devider {
  width: 98%;
  height: 1px;
  background-color: gray;
  opacity: 0.3;
  margin-left: 2px;
  margin-right: 2px;
}
.item-detail {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.item-avatar {
  width: 40px;
  height: 40px;
}
</style>
