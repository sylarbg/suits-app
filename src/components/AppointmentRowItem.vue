<template>
    <tr>
        <td>{{ appointment.id }} | {{ person }}</td>
        <td>{{ appointment.status.name }}</td>
        <td>{{ appointment.scheduled }}</td>
        <td>
            <v-btn v-if="canDelete" class="ma-2" :loading="loading" :disabled="loading" color="error" @click="remove">
                Delete
            </v-btn>

            <v-btn v-if="canRescheduleRejectedAppointment" depressed
                @click.prevent="$emit('action', {name: 'reschedule', 'appointment': appointment})">
                Reschedule
            </v-btn>

            <v-btn v-if="$root.user.isLawyer()" depressed
                @click.prevent="$emit('action', {name: 'edit', 'appointment': appointment})">
                Edit
            </v-btn>
        </td>
    </tr>
</template>

<script>
    import Gate from '@/services/Gate';
    import Appointment from '@/api/Appointment';
    import EventBus from '@/services/EventBus';

    export default {
        props: ['appointment'],
        data() {
            return {
                loading: false,
            }
        },
        computed: {
            person() {
                if (!this.$root.isLogged) {
                    return '';
                }
                return this.$root.user.isLawyer() ? this.appointment.citizen.name : this.appointment.lawyer.name;
            },
            canDelete() {
                return Gate.canDeleteAppointment(this.appointment)
            },
            canRescheduleRejectedAppointment() {
                return Gate.canRescheduleRejectedAppointment(this.appointment);
            }
        },
        methods: {
            async remove() {
                this.loading = true;
                try {
                    await Appointment.delete(this.appointment);
                    EventBus.$emit('appointment:updated');
                } catch ({
                    response
                }) {
                    EventBus.$emit('notification', {
                        text: response.data.message,
                        status: 'error'
                    });
                }
                this.loading = false;
            }
        }
    }
</script>