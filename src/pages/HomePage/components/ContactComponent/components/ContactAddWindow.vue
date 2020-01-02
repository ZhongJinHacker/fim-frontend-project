<template>
  <div class="search-container">
    <input style="resize:none;outline:none;" class="search-input" type="text" v-model="addContactId" />
    <img class="contact-search_img" src="@/assets/iconfont/add.png" @click="addContact" />
  </div>
</template>

<script>
export default {
  name: 'ContactAddWindow',
  data () {
    return {
      addContactId: ''
    }
  },
  methods: {
    addContact () {
      console.log('addContactId: ' + this.addContactId)
      this.$store.dispatch('ADD_CONTACT', { addContactId: this.addContactId })
        .then(() => {
          console.log('ContactAddWindow addContact success. ')
        })
    }
  }
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
.contact-search_img {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 3px;
}
</style>
