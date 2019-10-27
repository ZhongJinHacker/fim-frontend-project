<template>
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
</template>

<script>
export default {
  name: 'FuncNav'
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.tab-container {
  width: 70px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  display: flex;
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
</style>