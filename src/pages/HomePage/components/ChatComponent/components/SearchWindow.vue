<template>
  <div class="search-container">
    <i class="search-i el-icon-search" />
    <input style="resize:none;outline:none;" class="search-input" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.search-input {
  height:30px;
  width: 150px;
  border: 1px solid grey;
  border-radius: 5px;
  margin-top: 8px;
  margin-left: 10px;
}
.search-i {
  margin-left: 8px;
  margin-top:18px;
}
</style>