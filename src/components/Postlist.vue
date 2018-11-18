<template>
  <div class="Postlist">
    <div v-if="isLoading" class="loading">
      <img src="../assets/loading.gif">
    </div>
    <ul v-else>
      <li>
        <span>全部</span>
        <span>精华</span>
        <span>分享</span>
        <span>问答</span>
        <span>招聘</span>
        <span>客户端测试</span>
      </li>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/user/${post.author.loginname}`"><img :src="post.author.avatar_url"></router-link>
        <span class="visit">
          <span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}
        </span>
        <span class="title">
          <span :class="{top: post.top, good: post.good}" class="need">
            {{tabChange(post)}}
          </span> <router-link :to="`/topic/${post.id}&${post.author.loginname}`">{{post.title}}</router-link>
        </span>
        <span class="time">
          {{changeTime(post.last_reply_at)}}
        </span>
      </li>
      <li class="Pagination"><Pagination @handleList="renderList"></Pagination></li>
    </ul>
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  data(){
    return {
      posts: [],
      isLoading: true,
      postPage: 1
    }
  },
  components: {
    Pagination
  },
  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: this.postPage
        }
      })
      .then((res)=>{
          this.posts = res.data.data
          this.isLoading = false
        })
    },
    renderList(value){
      this.postPage = value
      this.getData()
    }
  },
  created(){
    this.isLoading = true
    this.getData()
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
.Postlist{
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
}
img{
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
ul{
  margin-top: 15px;
}
ul > li:nth-child(1){
  background-color: #f0f0f0;
  color: #80bd01;
}
ul > li:nth-child(1) > span{
  margin: 0 10px;
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

.reply_count{
  color: #9e78c0;
  font-size: 13px;
}

.title{
  font-size: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  left: 110px;
  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title a{
  color: #333;
  font-weight: normal;
  text-decoration: none;
}

.title a:hover{
  text-decoration: underline;
}

.need{
  padding: 2px 4px;
  font-size: 12px;
  color: #999;
  background: #e5e5e5;
  border-radius: 3px;
  display: inline-block;
}

.need.top, .need.good{
  background-color: #80bd01;
  color: white;
}

.visit{
  font-size: 10px;
  width: 70px;
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.time{
  color: #778087;
  font-size: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.Pagination{
  border-top: 1px solid white;
}

.Pagination:hover{
  background-color: white;
}
</style>
