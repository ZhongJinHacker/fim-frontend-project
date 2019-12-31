<template>
  <div class="page-container">
    <div class="home-container" >
      <FuncNav @changeToChat="changeToChat" @changeToContact="changeToContact"/>
      <div class= "vertical-line" />
      <ChatComponent v-if="isShowChat" />
      <ContactComponent v-if="isShowContact" />
    </div>
  </div>
</template>

<script>
import FuncNav from './components/FuncNav'
import ChatComponent from './components/ChatComponent/index'
import ContactComponent from './components/ContactComponent/index'
import { SHOW_CONTACT_COMPONENT, SHOW_CHAT_COMPONENT, DEFAULT_SHOW_COMPONENT } from '@/global/Global.js'

export default {
  name: 'HomePage',
  components: {
    FuncNav,
    ChatComponent,
    ContactComponent
  },
  data () {
    return {
      webSocket: null,
      isShowChat: DEFAULT_SHOW_COMPONENT === SHOW_CHAT_COMPONENT,
      isShowContact: DEFAULT_SHOW_COMPONENT === SHOW_CONTACT_COMPONENT
    }
  },
  computed: {
    showComponent () {
      return this.$store.state.home.showComponent
    }
  },
  watch: {
    showComponent (newVal, oldVal) {
      if (newVal === SHOW_CONTACT_COMPONENT) {
        this.isShowChat = false
        this.isShowContact = true
      } else if (newVal === SHOW_CHAT_COMPONENT) {
        this.isShowChat = true
        this.isShowContact = false
      }
    }
  },
  methods: {
    initWebSocket () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        const URL = 'ws://echo.websocket.org'
        this.webSocket = new WebSocket(URL)
        this.webSocket.onmessage = this.webSocketOnMessage
        this.webSocket.onopen = this.webSocketOnOpen
        this.webSocket.onerror = this.webSocketOnError
        this.webSocket.onclose = this.webSocketClose
      }
    },
    // 连接建立之后执行send方法发送数据
    webSocketOnOpen () {
      let actions = { 'test': '12345' }
      this.webSocketSend(JSON.stringify(actions))
    },
    // 连接建立失败重连
    webSocketOnError () {
      this.initWebSocket()
    },
    // 数据接收
    webSocketOnMessage (e) {
      const redata = JSON.parse(e.data)
      console.log('websocket: onMessage: ' + JSON.stringify(redata))
    },
    // 数据发送
    webSocketSend (Data) {
      this.webSocket.send(Data)
    },
    // 关闭
    webSocketClose (e) {
      console.log('断开连接', e)
      this.webSocket.close()
    },
    closeWebSocket () {
      this.webSocket.close()
    },

    /**
     * 显示聊天界面
     */
    changeToChat () {
      this.isShowChat = true
      this.isShowContact = false
    },

    /**
     * 显示联系人界面
     */
    changeToContact () {
      this.isShowChat = false
      this.isShowContact = true
    }
  },
  created: function () {
    this.initWebSocket()
  },
  destroyed: function () {
    this.closeWebSocket()
  }
}
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
