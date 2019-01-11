<template>
  <div id="app">
    <Header/>
    <Middle/>
    <Footer/>
  </div>
</template>

<script>
import Middle from '@/components/Middle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'  // 此处必须使用@自动查找，不然报错
export default {
  name: 'App',
  data(){

  },
  components:{
    Middle,Header,Footer
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
