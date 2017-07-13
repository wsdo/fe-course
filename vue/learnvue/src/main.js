import Vue  from 'vue'
import App from './App'

import router from '@/router'
import '@/assets/css/app'
// import 'bootstrap/js/bootstrap.min.js'
// import 'bootstrap/css/bootstrap.min.css'
import bootstrap from 'bootstrap'
new Vue({
	el: "#app",
	router,
	template: '<App />',
	components: {
		App
	}
})