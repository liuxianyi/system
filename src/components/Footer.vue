<template>

  <div class="footer">
    {{msg}}
  </div>
</template>

<script>
    export default {
        name: "Footer",
      data(){
          return{
            msg:"hello Footer!"
          }
      }
    }
</script>

<style scoped>
  .footer{
    height: 30px;
    margin: 2px auto;
  }
</style>
