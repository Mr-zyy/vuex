import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	count: 20
}
const actions = {
	increment : ({commit}) => {
		commit('increment')
	},
	decrement: ({commit}) => {
		commit('decrement')
	},
	clickOdd: ({commit,state}) => {
		if(state.count % 2 === 0){
			commit('increment')
		}
	},
	clickAsync: ({commit}) => {
		new Promise((resolve) => {
			setTimeout(function(){
				commit('increment')
  				resolve()
			},1000)
		})
	}
}
const mutations = {
	increment(state) {
		state.count++
	},
	decrement(state) {
		state.count--
	}
}
const getters = {
	count(state) {
		return state.count
	},
	getOdd(state) {
		return state.count % 2 === 0?'偶数':'奇数'
	}
}
export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters
})