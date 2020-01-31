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

const CONNECT = 1
const CHAT = 2
const ONLINE_TYPE = 3
const KEEPALIVE = 4
const FRIEND_REQUEST = 5
const PULL_FRIENDS = 6

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
      keepaliveTimer: null,
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
        const URL = 'ws://localhost:12000/ws'
        this.webSocket = new WebSocket(URL)
        this.webSocket.onmessage = this.webSocketOnMessage
        this.webSocket.onopen = this.webSocketOnOpen
        this.webSocket.onerror = this.webSocketOnError
        this.webSocket.onclose = this.webSocketClose
      }
    },
    // 连接建立之后执行send方法发送数据
    webSocketOnOpen () {
      console.log('连接打开...')
      const wsContentReqVo = { action: CONNECT, chatMsg: { senderId: this.$store.state.login.username } }
      this.webSocketSend(JSON.stringify(wsContentReqVo))
      if (this.keepaliveTimer != null || this.keepaliveTimer !== undefined) {
        clearInterval(this.keepaliveTimer)
        this.keepaliveTimer = null
      }
      this.keepaliveTimer = setInterval(this.keepalive, 10000)
    },
    // 连接建立失败重连
    webSocketOnError () {
      this.initWebSocket()
    },
    // 数据接收
    webSocketOnMessage (e) {
      const wsContentRspVo = JSON.parse(e.data)
      console.log('websocket: onMessage: ' + JSON.stringify(wsContentRspVo))
      this.handlerServerMsg(wsContentRspVo)
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
     * 处理服务端ws发过来的消息
     */
    handlerServerMsg (wsContentRspVo) {
      const action = wsContentRspVo.action
      switch (action) {
        case CONNECT:
          break
        case CHAT:
          this.$store.dispatch('RECV_MSG', wsContentRspVo)
          break
        case ONLINE_TYPE:
          break
      }
    },
    keepalive () {
      const wsContentReqVo = { action: KEEPALIVE, chatMsg: { senderId: this.$store.state.login.username } };
      // 发送心跳
      console.log('发送心跳包...')
      this.webSocketSend(JSON.stringify(wsContentReqVo))
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
