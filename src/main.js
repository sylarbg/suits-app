import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import User from '@/api/User'
import { EventBus } from '@/services/EventBus'

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
    // this.$on('notification', ({text, status}) => {
    //     this.notification.text = text;
    //     this.notification.show = true;
    //     this.notification.status = status || 'success';        
    // });
    // this.$on('notification:close', () => {
    //   this.notification.text = '';
    //   this.notification.show = false;
    //   this.notification.status = 'success'; 
    // })
  },
  render: h => h(App)
}).$mount('#app')
