import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from '@/plugins/vuetify';
import User from '@/api/User';
import EventBus from '@/services/EventBus';
import DatetimePicker from 'vuetify-datetime-picker';

Vue.use(DatetimePicker);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  data: {
    isLogged: User.isLoggedIn(),
    user: User.data(),
    notification: {
      show: false,
      text: '',
      status: 'success',
    },    
  },
  created() {      
    EventBus.$on('auth:logout', () => {
      this.isLogged = false;
      this.user = null;
    });
    EventBus.$on('auth:login', ({user})  => {
      this.isLogged = true;
      this.user = user;
    }); 
  },
  render: h => h(App)
}).$mount('#app')
