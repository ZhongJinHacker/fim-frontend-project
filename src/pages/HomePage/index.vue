<template>
  <div class="page-container">
    <div class="home-container">
      <FuncNav/>
      <div class= "vertical-line" />
      <ChatList/>
      <div class= "vertical-line" />
      <div class="chatting-container">chat page</div>
    </div>
  </div>
</template>

<script>
import FuncNav from './components/FuncNav'
import ChatList from './components/ChatList'

export default {
  name: "HomePage",
  components: {
    FuncNav,
    ChatList
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.home-container {
  display: flex;
  flex-wrap: nowrap;
  height: 500px;
  width: 800px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
}
.chatlist-container {
  width: 300px;
}
.menu {
  position: relative;
  bottom: -400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
}
.vertical-line {
  width: 1px;
  background-color: gray;
  opacity: 0.5;
}
</style>