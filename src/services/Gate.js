import User from '@/api/User';
import AppointmentStatuses from '@/services/AppointmentStatuses'

class Gate {
    constructor(user) {
        this.user = user
    }

    canRescheduleRejectedAppointment(appointment) {
        return !this.user.isLawyer() && appointment.status.id == AppointmentStatuses.REJECTED.value
    }

    canDeleteAppointment(appointment) {
        return this.user.isLawyer() && appointment.lawyer.id == this.user.id;
    }
}

export default new Gate(User.data());