import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:100
	},
	getters:{
		countSum:state=>state.count*10
	},
	mutations:{
		addCou(state){
			state.count++;
		}
	}
})

export default store