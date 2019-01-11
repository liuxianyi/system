<template>
  <div class="middle">
    <div class="buttons_search">
      <Buttons_Search/>
    </div>
    <div class="buttons">
      <Buttons/>
    </div>
    <div class="analysis_area">
      <AnalysisArea/>
    </div>

    <!--<History/>
    <Buttons/><router-view/>-->
  </div>
</template>

<script>
  import Buttons from '@/components/middle_dir/Buttons'
  import AnalysisArea from '@/components/middle_dir/AnalysisArea'
  import Buttons_Search from '@/components/middle_dir/Buttons_Search'
export default {
  name: 'Middle',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    History,
    Buttons,
    AnalysisArea,
    Buttons_Search
  }
}
</script>


<style scoped>
.middle{
  height: 1000px;
  width: 100%;
  background-color: aquamarine;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .buttons_search{
    height: 20%;
  }
  .buttons{
    padding-bottom: 10px;
  }
  .analysis_area{

  }
</style>
