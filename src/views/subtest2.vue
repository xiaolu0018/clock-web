<template>
	<div>
		<h3>subtest2</h3>
		<p>{{mycount}}</p>
		<p>{{sumCount}}</p>
	</div>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'subtest2',
		data(){
			return {
				loaclCount:10000
			}
		},
		computed:mapState({
			mycount:state=>state.count,
			sumCount(state){
				return state.count+this.loaclCount
			}
		})
	}
</script>

<style>
</style>