<template>
  <div class="UserInfo">
    <div v-if="isLoading" class="loading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else>
      <section class="content">
        <div class="topbar gang"><router-link to="/">主页</router-link> /</div>
        <main class="userInfo">
          <img :src="user.avatar_url" :alt="user.loginname">
          <span class="name">{{user.loginname}}</span>
          <p class="count">{{user.score}}积分</p>
          <p>注册时间{{changeTime(user.create_at)}}</p>
        </main>
      </section>
      <section class="content">
        <div class="topbar">最近参与的话题</div>
        <main>
          <div class="topic" v-if="user.recent_replies.length === 0">无话题</div>
          <ul v-else>
            <li v-for="reply in user.recent_replies" :key="reply.id">
              <router-link :to="`/user/${reply.author.loginname}`"><img :src="reply.author.avatar_url"></router-link>
              <span class="title">
                <router-link :to="`/topic/${reply.id}&${reply.author.loginname}`">{{reply.title}}</router-link>
              </span>
              <span class="time">
                {{changeTime(reply.last_reply_at)}}
              </span>
            </li>
            <li>查看更多»</li>
          </ul>
        </main>
      </section>
      <section class="content">
        <div class="topbar">最近创建的话题</div>
        <main>
          <div class="topic" v-if="user.recent_topics.length === 0">无话题</div>
          <ul v-else>
            <li v-for="topic in recentTopics" :key="topic.id">
              <router-link :to="`/user/${topic.author.loginname}`"><img :src="topic.author.avatar_url"></router-link>
              <span class="title">
                <router-link :to="`/topic/${topic.id}&${topic.author.loginname}`">{{topic.title}}</router-link>
              </span>
              <span class="time">
                {{changeTime(topic.last_reply_at)}}
              </span>
            </li>
            <li>查看更多»</li>
          </ul>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {},
      isLoading: true
    }
  },
  computed:{
    recentReplies(){
      if(this.user.recent_replies){
        return this.user.recent_replies.splice(0,5)
      }
    },
    recentTopics(){
      if(this.user.recent_topics){
        return this.user.recent_topics.splice(0,5)
      }
    }
  },
  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/user/'+this.$route.params.name)
      .then((res)=>{
          this.user = res.data.data
          this.isLoading = false
        })
    }
  },
  created(){
    this.isLoading = true
    this.getData()
  },
  watch: {
    '$route'(to, from){
      this.getData()
    }
  }
}
</script>


<style scoped>
.loading{
  height: 90vh;
  position: relative;
  margin-top: 15px;
}
.loading img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
}

.content{
  margin-top: 15px;
  background-color: #fff;
  width: 80%;
  margin: 15px auto;
  border-radius: 3px;
}

main p{
  margin-bottom: 10px;
  color: #ababab;
}

.userInfo{
  position: relative;
  font-size: 14px;
  padding: 12px;
  border-top: 1px solid #E5E5E5;
}

.name{
  color: #778087;
  position: absolute;
  left: 60px;
  top: 10px;
}

.count{
  color: #333;
  padding-top: 10px;
}

.topbar{
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 14px;
  margin: 0;
}

.gang{
  color: #ccc;
}

.topbar a{
  color: #80bd01;
  text-decoration: none;
}

.topbar a:hover{
  text-decoration: underline;
}

img{
  width: 40px;
  border-radius: 2px;
}

main ul li img{
  width: 30px;
  border-radius: 2px;
}

li{
  list-style: none;
  padding: 10px;
  font-size: 14px;
  border-top: 1px solid #f0f0f0;
  color: #b4b4b4;
  position: relative;
}

li:hover{
  background: #f0f0f0;
}

.title{
  font-size: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  left: 80px;
  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title a{
  color: #08c;
  text-decoration: none;
}

.title a:hover{
  color: #005580;
  text-decoration: underline;
}

.time{
  color: #778087;
  font-size: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.topic{
  padding: 10px;
}

</style>
