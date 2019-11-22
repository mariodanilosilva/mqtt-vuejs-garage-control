import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt';


Vue.use(VueMqtt, 'http://broker.mqttdashboard.com:8000/mqtt', { clientId: 'WebClient-' + parseInt(Math.random()) });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
