<template>
  <div class="header">
    <img src="..\assets\cnodejs_light.svg" alt="">
    <ul>
      <li>首页</li>
      <li>新手入门</li>
      <li>API</li>
      <li>关于</li>
      <li>注册</li>
      <li>登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header'
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
  color: #ccc;
  font-size: 13px;
  float: right;
  margin-top: 6px;
  margin-right: 50px;
}
li{
  display: inline-block;
  padding: 10px 15px;
}
</style>
