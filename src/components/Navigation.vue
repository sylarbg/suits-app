<template>
    <v-app-bar app color="indigo" dense dark>
        <v-toolbar-title>Suits &amp; Co</v-toolbar-title>
        <v-spacer></v-spacer>

        <span v-if="$root.isLogged" class="mr-5"> Hi, {{ $root.user.name }}</span>

        <router-link class="text-decoration-none white--text mr-5" :to="{ name: 'Lawyers' }">Layewers
        </router-link>        

        <template v-if="$root.isLogged">
            <a @click.prevent="dialog = true" v-if="!$root.user.isLawyer()" class="text-decoration-none white--text mr-5" >Book Now</a>

            <a @click.prevent="dialogAsLawyer = true" v-if="$root.user.isLawyer()" class="text-decoration-none white--text mr-5">Make Appointment</a>
                        
            <router-link class="text-decoration-none white--text mr-5" to="appointments">My
                Appointmnets
            </router-link>
        </template>
       
        <template v-if="!$root.isLogged">
            <router-link class="text-decoration-none white--text mr-5" to="/login">Login
            </router-link>
            <router-link class="text-decoration-none white--text mr-5" to="/register">Register
            </router-link>
        </template>
        <router-link v-if="$root.isLogged" class="text-decoration-none white--text mr-5" to="/logout">Logout</router-link>

        <template v-if="$root.isLogged">
            <BookAppointmentModal :dialog.sync="dialog" v-if="!$root.user.isLawyer()">
                <template slot="title">
                    Make Appointment
                </template>
            </BookAppointmentModal>

            <EditAppointmentModal :dialog.sync="dialogAsLawyer" v-if="$root.user.isLawyer()">
                <template slot="title">
                    Make Appointment
                </template>
            </EditAppointmentModal>

        </template>
    </v-app-bar>
</template>

<script>    
    import BookAppointmentModal from '@/components/BookAppointmentModal'
    import EditAppointmentModal from '@/components/EditAppointmentModal'
    export default {
        components: {
            BookAppointmentModal,
            EditAppointmentModal
        },
        data() {
            return {
                dialog: false,
                dialogAsLawyer: false,
            }
        }        
    }
</script>

<style>
    .v-application a.router-link-active {
        background: white;
        color: #3f51b5 !important;
        padding: 5px;
    }
</style>