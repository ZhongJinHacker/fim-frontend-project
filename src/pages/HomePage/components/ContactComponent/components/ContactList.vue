<template>
    <div class="contactlist-container">
    <div class="contactlist-search">
      <ContactAddWindow/>
    </div>
    <div class="layout-devider" />
    <div class="contactlist-content">
      <ul class="contactlist-ul">
        <li class="contact-list" :key="index"  v-for="(contact, index) in contactList" >
          <ContactListItem :contact="contact"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ContactAddWindow from './ContactAddWindow'
import ContactListItem from './ContactListItem'
import { contactList } from '@/api/userRequest'

export default {
  name: 'ContactList',
  components: {
    ContactAddWindow,
    ContactListItem
  },
  data () {
    return {
      contactList: [
      ]
    }
  },
  async mounted () {
    const Authorization = this.$store.state.login.Authorization
    const response = await contactList({ Authorization })
    this.contactList = response.data.friends
    console.log('contact data--> ' + this.contactList[0])
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "@/styles/common.scss";

.contactlist-container {
  width: $home_contact_list_width;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
}
.contactlist-search {
  border-width: 0px;
  height: 10%;
}
ul {
  overflow-y:scroll;
}
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.contactlist-content {
  height: 90%;
}
.contactlist-ul {
  height: 100%;
}
.layout-devider {
  width: 100%;
  height: 1px;
  background-color: gray;
  margin-top: 10px;
  opacity: 0.3;
}
</style>
