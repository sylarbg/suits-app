import HttpClient from "./HttpClient";

export default {
    async fetch(params) {
        const result = await HttpClient.get("/api/appointments", {
            params: params
        });
        return {
            data: result['data']['data'],
            meta: result['data']['meta']
        };
    },
    async post(id, params) {
        const result = (await HttpClient.post(`/api/lawyers/${id}/appointments`, params)).data;
        return result['data']

    },
    async reschedule(lawyerId, appointmentId, params) {
         await HttpClient.put(`/api/lawyers/${lawyerId}/appointments/${appointmentId}/reschedule`, params);        
    },
    async delete(appointment) {
         await HttpClient.delete(`/api/lawyers/${appointment.lawyer.id}/appointments/${appointment.id}`);
    },
    async update(lawyerId, appointmentId, params) {
        await HttpClient.put(`/api/lawyers/${lawyerId}/appointments/${appointmentId}`, params);        
    }
}