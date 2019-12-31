<template>
  <div class="contact-home-container">
    <ContactList/>
    <div class= "contact-vertical-line"/>
    <ContactDetailWindow/>
  </div>
</template>

<script>
import ContactList from './components/ContactList'
import ContactDetailWindow from './components/ContactDetailWindow'

export default {
  name: 'ContactComponent',
  components: {
    ContactList,
    ContactDetailWindow
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/styles/common.scss";

.contact-home-container {
  display: flex;
  flex-direction: row;
  height: $home_page_height;
  width: $home_page_width;
  background-color: white;
}

.contact-vertical-line {
  width: 1px;
  background-color: gray;
  opacity: 0.3;
}
</style>
