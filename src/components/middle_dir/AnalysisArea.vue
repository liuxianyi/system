<template>
    <div class="analysis well well-lg">
      {{msg}}
    </div>
</template>

<script>
    export default {
        name: "AnalysisArea",
      data(){
          return{
            msg:"analysis"
          }
      }
    }
</script>

<style scoped>
  .analysis{
    height: 600px;
    width: 80%;
    margin: 10px auto;
  }
</style>
