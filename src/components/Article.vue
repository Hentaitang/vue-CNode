<template>
  <div class="Article">
    <div v-if="isLoading" class="loading">
      <img src="../assets/loading.gif">
    </div>
    <div v-else class="wrapper">
      <SlideBar></SlideBar>
      <main>
        <section class="content">
          <div class="titleHeader">
            <div class="title">
              <span v-if="blog.top || blog.good" class="top">
                {{tabChange(blog)}}
              </span> {{blog.title}}
            </div>
            <div class="introduction">
              <span>• 发布于{{changeTime(blog.create_at)}}</span>
              <span>• 作者 <router-link :to="`/user/${blog.author.loginname}`">{{blog.author.loginname}}</router-link></span>
              <span>• {{blog.visit_count}}次浏览</span>
              <span>• 来自 {{needChange(blog)}}</span>
            </div>
          </div>
          <div class="blog" v-html="blog.content"></div>
        </section>
        <section class="replies">
          <div class="reply">{{length}} 回复</div>
          <ul class="allRep">
            <li v-for="(reply,index) in blog.replies" :key="reply.id">
              <router-link :to="`/user/${reply.author.loginname}`"><img class="avatar" :src="reply.author.avatar_url" :alt="reply.author.loginname"></router-link>
              <div class="userInfo">
                <router-link :to="`/user/${reply.author.loginname}`" class="name"><span class="name">{{reply.author.loginname}}</span></router-link>
                <span>{{index+1}}楼•{{changeTime(reply.create_at)}}</span>
              </div>
              <p v-html="reply.content"></p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import SlideBar from './SlideBar'
export default {
  data(){
    return {
      blog: {},
      isLoading: true,
      length: 0
    }
  },
  components:{
    SlideBar
  },
  methods: {
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id)
      .then((res)=>{
          this.blog = res.data.data
          this.isLoading = false
          this.length = this.blog.replies.length
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


<style>
@import url('../assets/markdown-github.css');

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

.wrapper{
  width: 90%;
  margin: 0 auto;
}

main{
  padding: 0;
  margin-right: 305px;
}

blockquote{
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #eee;
  color: #5A5D5A;
}

.prettyprint {
    font-size: 14px;
    border-radius: 0;
    padding: 0 15px;
    border: none;
    margin: 20px -10px;
    border-width: 1px 0;
    background: #f7f7f7;
    -o-tab-size: 4;
    -moz-tab-size: 4;
    tab-size: 4;
}

.content{
  margin-top: 15px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 3px;
}

.replies{
  background-color: #fff;
  margin: 0 auto 15px auto;
  border-radius: 5px;
}

.top{
  padding: 2px 4px;
  font-size: 12px;
  color: #999;
  background: #e5e5e5;
  border-radius: 3px;
  display: inline-block;
  background-color: #80bd01;
  color: white;
}

.titleHeader {
  padding: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
  color: #333333;
}

.introduction {
  margin: 6px 0px;
}

.introduction span {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.introduction a{
  color: #838383;
}

.blog{
  border-top: 1px solid #e5e5e5;
  padding: 10px 20px;
}

.markdown-text{
  color: #333333;
}

a{
  color: #08c;
  text-decoration: none;
}

a:hover{
  text-decoration: underline;
}

.markdown-text p{
  margin: 1em 0;
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
  word-break: break-word;
  white-space: pre-wrap;
}

.markdown-text ul{
  margin: 0 0 10px 25px;
}

.markdown-text img {
  width: 92% !important;
}

.reply{
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  color: #444;
  font-size: 14px;
}

.allRep > li{
  list-style: none;
  line-height: 2em;
  padding-right: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 14px;
}

.allRep > li .markdown-text>:first-child{
  margin-top: 0;
}

.allRep > li  ul{
  padding: 0;
  margin: 0 0 10px 25px;
}

ul li .avatar{
  width: 30px;
  height: 30px;
  border-radius: 3px;
}

.userInfo{
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  position: absolute;
  left: 40px;
  top: 5px;
}

.name{
  color: #666;
  font-weight: 700;
}

.name:hover{
  color: #385f8a;
  text-decoration: none;
  font-weight: 700;
}
</style>
