<template>
	<div class="header">
		{{msg}}
	</div>
</template>
<script>
	export default {
		name:"Header",
		data(){
			return{
				msg:"您好 Header"
			}
		}
	}
</script>
<style>
	.header{
		height: 30px;
    margin: 2px auto;
	}
</style>
