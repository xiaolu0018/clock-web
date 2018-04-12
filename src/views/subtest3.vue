<template>
	<div>
		<h3>subtest3</h3>
		<h4>{{mypro}}</h4>
		<p>{{this.$store.getters.countSum}}</p>
	</div>
	
</template>

<script>
	export default{
		name:'subtest3',
		data:function(){
			return {
				test:'lxl'
			}
		},
		props:['mypro'],
		mounted(){
			
		}
	}
</script>

<style>
</style>