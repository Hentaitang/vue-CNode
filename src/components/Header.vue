<template>
  <div class="header">
    <router-link to="/"><img src="..\assets\cnodejs_light.svg" alt=""></router-link>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li>新手入门</li>
      <li>API</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style scoped>
.header{
  background-color: #444;
  height: 50px;
}
img{
  max-width: 120px;
  margin-left: 63px;
  margin-top: 8px;
}
ul{
  list-style: none;
  font-size: 13px;
  float: right;
  margin-top: 6px;
  margin-right: 50px;
}
li{
  display: inline-block;
  padding: 10px 15px;
  color: #ccc;
  cursor: pointer;
}
li:hover,
li a:hover{
  color: #FFFFFF;
}

li a{
  color: #ccc;
  text-decoration: none;
}
</style>
