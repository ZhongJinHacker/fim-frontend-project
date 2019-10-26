<template>
    <div>
        <div> {{ username }} </div>
        <div>{{password}}</div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username: 'jiang',
      password: '123456'
    }
  }
}
</script>

<style lang="scss">

</style>
