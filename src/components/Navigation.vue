<template>
    <v-app-bar app color="indigo" dense dark>
        <v-toolbar-title>Suits &amp; Co</v-toolbar-title>
        <v-spacer></v-spacer>
        <span v-if="$root.isLogged" class="mr-5"> Hi, {{ $root.user.name }}</span>
        
        <router-link class="text-decoration-none white--text mr-5" to="/lawyers">Layewers
        </router-link>

        <a @click.prevent="dialog = true" class="text-decoration-none white--text mr-5" to="/appointments">Book Now</a>
        
        <router-link v-if="$root.isLogged" class="text-decoration-none white--text mr-5" to="/appointments">My
            Appointmnets
        </router-link>        
    

        <template v-if="!$root.isLogged">
            <router-link class="text-decoration-none white--text mr-5" to="/login">Login
            </router-link>
            <router-link  class="text-decoration-none white--text mr-5" to="/register">Register
            </router-link>
        </template>
        
        <a v-if="$root.isLogged" class="text-decoration-none white--text" to="/logout"
            @click.prevent="logout">Logout</a>

        <BookAppointmentModal :dialog.sync="dialog"></BookAppointmentModal>         
    </v-app-bar>
</template>

<script>
    import User from '@/api/User'
    import BookAppointmentModal from '@/components/BookAppointmentModal'

    export default {
        components: {
            BookAppointmentModal
        },
        data() {
              return {
                    dialog: false,
              }
            },
        methods: {            
            async logout() {
                try {
                    await User.logout();
                    this.$rooter.push({
                        name: "Home"
                    });
                } catch ({
                    response
                }) {
                    //console.log(response)
                }
            }
        }
    }
</script>