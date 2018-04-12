import Vue from 'vue'
import Router from 'vue-router'

import subtest1 from '@/views/subtest1'
import subtest2 from '@/views/subtest2'
import subtest3 from '@/views/subtest3'
import test2 from '@/views/test2'
import test3 from '@/views/test3'
import test1 from '@/views/test1'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes:[
		{
			path:'/',
			redirect:'/test1'
			
		},
		{
			path:'/test2',
			name:'test2',
			component:test2
		},
		{
			path:'/test3',
			name:'test3',
			component:test3
		},
		{
			path:'/test1',
			name:'test1',
			component:test1,
			children:[
				{
					path:'',
					redirect:'test1/subtest1'
					
				},
				{
					path:'/subtest1/:id',
					
					component:subtest1,
					props:true
				},
				{
					path:'/subtest2/:id',
					name:'subtest2',
					component:subtest2,
					props:true
				},
				{
					path:'/subtest3/:id',
					name:'subtest3',
					component:subtest3,
					props:true
					
				}
			]
		}
		
	]
})
