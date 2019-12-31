<template>
  <div class="tab-container">
    <div class="nav-item">
      <img class="nav-avatar-img" src="@/assets/iconfont/avatar.png"/>
    </div>

    <div class="nav-item" @click="onChatClick">
      <img class="nav-chat-img" src="@/assets/iconfont/chat.png"/>
    </div>

    <div class="nav-item" @click="onContactClick">
      <img class="nav-contact-img" src="@/assets/iconfont/contact.png"/>
    </div>

    <div class="menu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu-two" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FuncNav',
  data () {
    return {

    }
  },
  methods: {
    onChatClick () {
      console.log('nav chat click')
      this.$store.dispatch('GOTO_CHAT', null)
    },
    onContactClick () {
      console.log('nav contact click')
      this.$store.dispatch('GOTO_CONTACT', null)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.tab-container {
  width: $home_nav_width;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-item {
  display: flex;
  width: 45px;
  height: 45px;
  margin-top: 10px;
}
.nav-avatar-img {
  width: 100%;
  height: 100%;
}
.nav-chat-img {
  width: 100%;
  height: 100%;
}
.nav-contact-img {
  width: 100%;
  height: 100%;
}
.menu {
  position: relative;
  bottom: -300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
}
</style>
