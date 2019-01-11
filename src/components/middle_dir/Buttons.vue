<template>
  <div class="buttons">
    <div class="btn-group btn-group-justified" role="group" aria-label="btn">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">1</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">2</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">3</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">4</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">4</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">4</button>
      </div>
    </div>

    <div class="btn-group btn-group-justified" role="group" aria-label="btn">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">Dropdown link</a></li>
          <li><a href="#">Dropdown link</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Buttons",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
.buttons{
  height: 50px;
  width: 80%;
  margin: 10px auto;
}
</style>
