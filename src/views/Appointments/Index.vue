<template>
    <v-container class="" fluid>
        <v-row>
            <v-col cols="12" sm="12" md="12">
                <v-form>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="lawyer" prepend-icon="mdi-account-search" label="Lawyer"
                                    @keyup="performSearch"></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-select v-model="status" :items="statuses" item-text="text" item-select="value"
                                    prepend-icon="mdi-list-status" label="Status" @change="performSearch" multiple>
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>

                <div class="text-center" v-if="loading">
                    <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
                </div>
                <v-container fluid v-if="!loading">
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Lawyer</th>
                                    <th class="text-left">Status</th>
                                    <th class="text-left">Date</th>
                                    <th class="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="appointment in resources.items" :key="appointment.id">
                                    <td>{{ appointment.lawyer.name }}</td>
                                    <td>{{ appointment.status.name }}</td>
                                    <td>{{ appointment.scheduled }}</td>
                                    <td>
                                        <template
                                            v-if="canRescheduleRejectedAppointment && appointment.status.id == statusNomenclature.REJECTED.value">                                            
                                            <a @click.prevent="selectForReschedule(appointment)" to="/appointments">Reschedule</a>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-container>
                <v-pagination class="mt-5" v-if="resources.total > 0" v-model="page" @input="selectPage"
                    :length="resources.pages"></v-pagination>
            </v-col>
        </v-row>
        <BookAppointmentModal @submit="update" :selectedLawyer="selectedAppointment.lawyer" :dialog.sync="dialog"></BookAppointmentModal>        
    </v-container>
</template>

<script>
    import Appointment from '@/api/Appointment';
    import User from '@/api/User';
    import AppointmentStatuses from '@/services/AppointmentStatuses'
    import BookAppointmentModal from '@/components/BookAppointmentModal'

    export default {
        name: 'Index',
        components: {
            BookAppointmentModal
        },
        data() {
            return {
                statusNomenclature: AppointmentStatuses,
                canRescheduleRejectedAppointment: false,
                dialog: false,                
                loading: false,
                resources: {
                    total: 0,
                    items: [],
                },
                page: 1,
                lawyer: '',
                order: '',
                status: [],

                selectedLawyer: null,
                selectedAppointment: {lawyer: null},
            }
        },
        computed: {
            statuses() {
                return Object.values(AppointmentStatuses)           
            }
        },
        methods: {
            update({lawyer, datetime}) {
               Appointment.reschedule(lawyer, this.selectedAppointment.id,  {datetime: datetime}); 
            },            
            selectForReschedule(appointment) {
                this.selectedAppointment = appointment;
                this.dialog = true;
            },
            performSearch() {
                this.page = 1;
                this.getResources()
            },
            async getResources() {
                this.loading = true;
                const result = await Appointment.fetch({
                    page: this.page,
                    lawyer: this.lawyer,
                    status: this.status
                });
                this.resources.items = result.data;
                this.resources.pages = result.meta.last_page
                this.resources.total = result.meta.total
                this.loading = false;
            },
            selectPage() {
                this.getResources();
            },
        },
        mounted() {
            this.canRescheduleRejectedAppointment = User.data().canRescheduleRejectedAppointment();
            this.getResources();
        }
    }
</script>