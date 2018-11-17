<template>
  <div class="SlideBar">
    <div class="summay">
      <div class="topbar">作者</div>
      <router-link :to="`/user/${userinfo.loginname}`"><img :src="userinfo.avatar_url" alt=""></router-link>
      <span>{{userinfo.loginname}}</span>
      <p>积分：{{userinfo.score}}</p>
    </div>
    <div class="topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="list in limitList1" :key="list.id">
          <router-link :to="`/topic/${list.id}&${list.author.loginname}`">{{list.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="list in limitList2" :key="list.id">
          <router-link :to="`/topic/${list.id}&${list.author.loginname}`">{{list.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideBar',
  data(){
    return {
      userinfo: {}
    }
  },
  computed:{
    limitList1(){
      if(this.userinfo.recent_topics){
        return this.userinfo.recent_topics.slice(0,5)
      }
    },
    limitList2(){
      if(this.userinfo.recent_replies){
        return this.userinfo.recent_replies.slice(0,5)
      }
    }
  },
  methods: {
    getData(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then((res)=>{
        this.userinfo = res.data.data
        console.log(this.userinfo)
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>


<style scoped>
  .summay, .replies, .topics {
    background-color: #fff;
  }
  .SlideBar {
    width: 290px;
    float: right;
    margin-top: 0;
  }
  li{
    padding: 3px 0 ;
  }
  .replies ul, .topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding: 10px 10px 20px 10px;
  }

  ul a {
    font-size: 14px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .summay .topbar {
    margin-top: 0px;
  }
</style>
