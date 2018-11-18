<template>
  <div class="pagination">
    <button @click="pageChange">首页</button>
    <button @click="pageChange">上一页</button>
    <button v-if="change" class="pagebtn">......</button>
    <button @click="pageChange(btn)" v-for="btn in pagebtns" :key="btn" :class="[{currentPage: btn === currentPage},'pagebtn']">{{btn}}</button>
    <button class="pagebtn">......</button>
    <button @click="pageChange">下一页</button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'pagination',
  data(){
    return {
      pagebtns: [1,2,3,4,5],
      currentPage: 1,
      change: false
    }
  },
  methods: {
    pageChange(value){
      if(typeof value !== 'number'){
        switch(true){
          case value.target.innerText === '首页':
            this.pagebtns = [1,2,3,4,5]
            this.pageChange(1)
            break
          case value.target.innerText === '上一页':
            $('.currentPage').prev().click()
            break
          case value.target.innerText === '下一页':
            $('.currentPage').next().click()
            break
          default:
            break
        }
        return
      }
      this.currentPage = value
      if(value > 4){
        this.change = true
      }else{
        this.change = false
      }
      if(value === this.pagebtns[4]){
        this.pagebtns.shift()
        this.pagebtns.push(value + 1)
      }else if(value === this.pagebtns[0] && value != 1){
        this.pagebtns.pop()
        this.pagebtns.unshift(value - 1)
      }
      this.$emit('handleList', this.currentPage)
    }
  }
}
</script>


<style scoped>
.pagination {
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

button:hover{
  background: #F5F5F5;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}

.currentPage:hover{
  background-color: #1f1b1b;
}
</style>
