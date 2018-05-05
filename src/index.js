import Vue from 'vue/dist/vue.min.js';
import todo from './components/todo.vue';
import Vue2Filters from 'vue2-filters';
import '../node_modules/font-awesome/scss/font-awesome.scss';

Vue.use(Vue2Filters);

new Vue ({
	el:'#app',
	template: '<div> <todo/> </div>',
	components: {
		todo: todo,
	}
})