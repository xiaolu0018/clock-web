<template>
	<div>
		<h3>test2</h3>
		<p>{{mycount}}</p>
		<button @click='myadd'>增加</button>
	</div>
	
</template>

<script>
//	import store from '@/vuex/store.js'
	export default{
		name:'test2',
		computed:{
			mycount(){
				return this.$store.state.count
			}
		},
		methods:{
			myadd(){
				console.log(this.$store)
				this.$store.commit('addCou')
			}
		}
	}
</script>

<style>
</style>