<template>
<div class="contact-item-container">
  <div class="contact-item-detail-container" @click="onItemClick(contact)">
    <img class="item-avatar" src="@/assets/iconfont/avatar.png"/>
    <div class="item-name">
      {{ contact.userName }}
    </div>
  </div>
  <div class="item-devider" />
</div>
</template>

<script>
export default {
  props: ['contact'],
  methods: {
    onItemClick (contact) {
      console.log('onItemClick: friendId: ' + contact.userName)
      this.$store.dispatch('SHOW_CONTACT', { userName: contact.userName, id: contact.id })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.contact-item-container {
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
}
.contact-item-detail-container {
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-top: 10px;
  margin-left: 5px;
}
.item-name {
  font-size: 16px;
  margin-left: 10px;
  margin-top: 9px;
}

.item-devider {
  width: 98%;
  height: 1px;
  background-color: gray;
  opacity: 0.3;
  margin-left: 2px;
  margin-right: 2px;
}

.item-avatar {
  width: 40px;
  height: 40px;
}

</style>
