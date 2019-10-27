<template>
  <div class="page-container">
    <div class="home-container">
      <div class="tab-container">
        <div class="avatar">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-touxiang" />
          </svg>
        </div>
        <div class="menu">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu-two" />
          </svg>
        </div>
      </div>
      <div class= "vertical-line" />
      <div class="chatlist-container">list</div>
      <div class= "vertical-line" />
      <div class="chatting-container">chat page</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.home-container {
  display: flex;
  justify-content: flex-start;
  position: fixed;
  height: 500px;
  width: 800px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
}
.tab-container {
  width: 80px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.chatlist-container {
  // background-color: green;
  width: 300px;
}
.chatting-container {
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

}
.avatar {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-top: 10px;
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
  margin: 1px auto 1px auto;
}
</style>