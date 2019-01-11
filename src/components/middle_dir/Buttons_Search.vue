<template>
    <div class="button_history">
      <div class="col-lg-8">
        <Search/>
      </div>
      <div class="col-lg-4">
        <history/>
      </div>
    </div>
</template>

<script>
  import Buttons from '@/components/middle_dir/Buttons'
  import History from '@/components/middle_dir/History'
  import Search from '@/components/middle_dir/Search'
    export default {
        name: "Buttons_Search",
      data(){
          return{

          }
      },
      components:{
          Buttons,History,Search
      }
    }
</script>

<style scoped>

</style>
