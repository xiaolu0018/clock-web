<template>
	<div id="App">
		<el-container>
			<el-header>
				<el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<template  v-for="(list,ind) in lists">
						<el-menu-item  v-if="!list.subMenu" :key="ind" :index="list.link" :class="myact">{{list.title}}</el-menu-item>					
						<el-submenu v-else :index="list.link" :key="ind">
							<template slot="title">{{list.title}}</template>
							<el-menu-item v-for="(sub,indexs) in list.subMenu" :class="myact" :key="ind+'-'+indexs" :index="sub.link+'/'+id">{{sub.title}}</el-menu-item>						
						</el-submenu>
					</template>
				</el-menu>
			</el-header>
						
			<el-main>
				<router-view :mypro='newdate'></router-view>
			</el-main>
			
			<el-footer>
				<div id="clock">
					<date>{{newdate}}</date>
					<my-time v-bind:mytimes="newtime"></my-time>
					<copy-right></copy-right>
				</div>
			</el-footer>
		</el-container>
	</div>

</template>

<script>
	import Date from './components/Date'
	import MyTime from './components/MyTime'
	import CopyRight from './components/CopyRight'
	import asideData from '@/api/api.js'
	import store from '@/vuex/store.js'
	

	//  alert(Api.data)

	var app = {
		name: "App",
		store,
		components: {
			Date,
			MyTime,
			CopyRight
		},
		
		data:function(){
			return {
				lists:[],
				id:'testProp'
			}
		},
		props: ['mytime', 'mydate'],
		watch:{
        	'$route'(to,from){
//      		console.log(to);
//      		console.log('<====')
//      		console.log(from);
//      		console.log('watch监听路由器变化')
        	}
        },
		computed: {
			newtime: function() {
				return this.mytime
			},
			newdate: function() {
				return this.mydate
			}
		},
		methods:{
			myact(){
//				if($route.path=="")
			}
		},
		beforeMount:function(){//获取list数据
			let _this=this;
			asideData.then(function(data) {
				_this.lists=data;
			})
		}
	}

	export default app;
</script>

<style>
	#clock {
		font-family: 'Share Tech Mono', monospace;
		color: #ffffff;
		text-align: center;
		/*position: fixed;*/
		/*right:0;*/
		bottom: 0;
		/*-webkit-transform: translate(-50%, -50%);*/
		/*transform: translate(-50%, -50%);*/
		color: #daf6ff;
		color: #333;
		text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
	}
</style>