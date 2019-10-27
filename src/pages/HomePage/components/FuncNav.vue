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
  width: 80px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.avatar {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
</style>