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
        const result = await HttpClient.post(`/api/lawyers/${id}/appointments`, params);
        return {
            data: result['data']['data'],
            meta: result['data']['meta']
        };
    },
    async reschedule(lawyerId, appointmentId, params) {
        const result = await HttpClient.put(`/api/lawyers/${lawyerId}/appointments/${appointmentId}/reschedule`, params);
        return {
            data: result['data']['data'],
            meta: result['data']['meta']
        };
    },
}