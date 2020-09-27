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
                            <v-col cols="12" md="4">
                                <v-select @change="performSearch"
                                    :items='[ {text: "Farthest from now", value: "-scheduled_for" }, {text: "Closest to now", value: "scheduled_for" }  ]'
                                    item-text="text" v-model="order" item-select="value" prepend-icon="mdi-sort"
                                    label="Order by">
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
                                    <th v-if="$root.user.isLawyer()">Citizen</th>
                                    <th v-if="!$root.user.isLawyer()" class="text-left">Lawyer</th>
                                    <th class="text-left">Status</th>
                                    <th class="text-left">Date</th>
                                    <th class="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <appointment-row-item @action="appointmantActions" :appointment="appointment"
                                    v-for="appointment in resources.items" :key="appointment.id" />
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-container>
                <v-pagination class="mt-5" v-if="resources.total > 0" v-model="page" @input="selectPage"
                    :length="resources.pages"></v-pagination>
            </v-col>
            <BookAppointmentModal v-if="!$root.user.isLawyer()" :appointment="selectedAppointment"
                :dialog.sync="rescheduleDialog"></BookAppointmentModal>

            <EditAppointmentModal v-if="$root.user.isLawyer()" :appointment.sync="selectedAppointment"
                :dialog.sync="editDialog">
            </EditAppointmentModal>
        </v-row>
    </v-container>
</template>

<script>
    import Appointment from '@/api/Appointment';
    import BookAppointmentModal from '@/components/BookAppointmentModal'
    import EditAppointmentModal from '@/components/EditAppointmentModal'
    import AppointmentRowItem from '@/components/AppointmentRowItem'
    import {
        EventBus
    } from '@/services/EventBus';
    import AppointmentStatuses from '@/services/AppointmentStatuses'


    export default {
        name: 'Index',
        components: {
            AppointmentRowItem,
            BookAppointmentModal,
            EditAppointmentModal
        },
        watch: {
            rescheduleDialog: function (newValue) {
                if (newValue == false) {
                    this.selectedAppointment = this.nullAppointment();
                }
            },
            editDialog: function (newValue) {
                if (newValue == false) {
                    this.selectedAppointment = this.nullAppointment();
                }
            }
        },
        data() {
            return {
                editDialog: false,
                rescheduleDialog: false,
                loading: false,
                resources: {
                    total: 0,
                    items: [],
                },
                page: 1,
                lawyer: '',
                order: '',
                status: [],
                selectedAppointment: this.nullAppointment(),
            }
        },

        computed: {
            statuses() {
                return Object.values(AppointmentStatuses)
            }
        },
        methods: {
            nullAppointment() {
                return {
                    id: null,
                    lawyer: null,
                    citizen: null,
                };
            },
            appointmantActions({
                name,
                appointment
            }) {
                const actions = {
                    'reschedule': () => {
                        this.selectedAppointment = appointment;
                        this.rescheduleDialog = true;

                    },
                    'edit': () => {
                        this.selectedAppointment = appointment;
                        this.editDialog = true;
                    }
                }

                if (Object.prototype.hasOwnProperty.call(actions, name)) {
                    actions[name]()
                    //this.$nextTick(() => actions[name]());
                }
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
                    status: this.status,
                    order: this.order
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
            this.getResources();

            EventBus.$on('appointment:updated', () => {
                this.performSearch();
            })
        }
    }
</script>