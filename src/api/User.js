import Auth from '@/api/Auth';
import { EventBus } from '@/services/EventBus';

export default { 
   user: null, 
   data() {
       if (!this.user) {
            const data = localStorage.getItem("user");
            if (!data) {
                return null;
            }
            this.user = JSON.parse(data);
            return this.user;
       }
   }, 
   async logout() {    
        await Auth.logout();
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        this.user = null;
        EventBus.$emit('auth:logout');
    },
    isLoggedIn() {
        return localStorage.getItem('auth');
    },
    
    async login(data) {
        const user = (await Auth.login(data)).data.data;                            
        localStorage.setItem("auth", true);          
        localStorage.setItem("user",JSON.stringify(user));
        EventBus.$emit('auth:login', {user});
    }
}