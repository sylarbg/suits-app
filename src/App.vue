<template>
  <v-app id="inspire">        
    <navigation></navigation>
    <v-main>
      <notifications></notifications>      
      <router-view />     
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Notifications from '@/components/Notifications';

export default {
  components: {
    Navigation,
    Notifications
  }
}
</script>