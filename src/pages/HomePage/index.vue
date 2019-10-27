<template>
  <div class="page-container">
    <div class="home-container">
      <FuncNav/>
      <div class= "vertical-line" />
      <ChatList/>
      <div class= "vertical-line" />
      <ChatWindow/>
    </div>
  </div>
</template>

<script>
import FuncNav from './components/FuncNav'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'

export default {
  name: "HomePage",
  components: {
    FuncNav,
    ChatList,
    ChatWindow
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
  height: $home_page_height;
  width: $home_page_width;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
}
.vertical-line {
  width: 1px;
  background-color: gray;
  opacity: 0.3;
}
</style>