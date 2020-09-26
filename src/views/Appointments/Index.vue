<template>
    <v-container class="" fluid>
        <v-row>
            <v-col cols="12" sm="4" md="4">
                FILTER
            </v-col>
            <v-col cols="12" sm="8" md="8">

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
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="appointment in resources.items" :key="appointment.id">
                                    <td>{{ appointment.lawyer.name }}</td>                                    
                                    <td>{{ appointment.status }}</td> 
                                    <td>{{ appointment.status }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                </v-container>
                <v-pagination class="mt-5" v-if="resources.total" v-model="page" @input="selectPage"
                    :length="resources.total"></v-pagination>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>
    import Appointment from '@/api/Appointment';

    export default {
        name: 'Index',
        data() {
            return {
                loading: false,
                resources: {
                    total: 0,
                    items: [],
                },
                page: 1,
                form: {
                    'email': '',
                    'password': '',
                },
                cards: [{
                        title: 'Pre-fab homes',
                        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                        flex: 6
                    },
                    {
                        title: 'Favorite road trips',
                        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                        flex: 6
                    },
                    {
                        title: 'Best airlines',
                        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                        flex: 6
                    },
                ],
            }
        },
        methods: {
            async getResources() {
                this.loading = true;
                const result = await Appointment.fetch({
                    page: this.page
                });
                this.resources.items = result.data;
                this.resources.total = result.meta.last_page
                this.loading = false;
            },
            selectPage() {
                this.getResources();
            },
        },
        mounted() {
            this.getResources();
        }
    }
</script>