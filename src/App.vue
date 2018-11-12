<template>
  <div id="app">
    <Header></Header>
    <Postlist></Postlist>
  </div>
</template>

<script>
import Header from './components/Header'
import Postlist from './components/Postlist'

export default {
  name: 'App',
  components: {
    Header,
    Postlist
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app{
  background-color: #E1E1E1;
}
</style>
