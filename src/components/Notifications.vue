<template>
    <v-snackbar v-model="show" :color="status">
        {{ text }}
        <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="close">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
    import EventBus from '@/services/EventBus';

    export default {
        data() {
            return {
                show: false,
                text: '',
                status: 'danger',
            }
        },
        methods: {
            close() {
                this.text = '';
                this.show = false;
                this.status = 'success';
            }
        },
        mounted() {
            EventBus.$on('notification', ({
                text,
                status
            }) => {
                this.text = text;
                this.show = true;
                this.status = status || 'success';
            });

            EventBus.$on('notification:close', () => {
                this.text = '';
                this.show = false;
                this.status = 'success';
            });
        }
    }
</script>