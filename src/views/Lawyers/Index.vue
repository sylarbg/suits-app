<template>
    <v-container class="" fluid>
        <v-row>
            <v-col cols="12" sm="12" md="12">
                <v-form>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="name" prepend-icon="mdi-account-search" label="Name"
                                    @keyup.stop="performSearch" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-select @change="performSearch"
                                    :items='[ {text: "Name (A-Z)", value: "name" }, {text: "Name (Z-A)", value: "-name" }  ]'
                                    item-text="text" v-model="order" item-select="value" prepend-icon="mdi-sort"
                                    label="Order by">
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>

                <fetch-json :api="api" :filters="filters" class="mb-8">
                    <div slot-scope="{ resources: resources, loading }">
                        <div class="text-center" v-if="loading">
                            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
                        </div>
                        <v-container fluid v-if="!loading">
                            <v-row dense>
                                <v-col v-for="resource in resources.items" :key="resource.id" cols="6">
                                    <v-card>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title class="headline">{{ resource.name }}
                                                </v-list-item-title>
                                                <v-list-item-subtitle>{{ resource.email }}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn v-if="$root.user && !$root.user.isLawyer()"
                                                @click="openDialog(resource)">
                                                Request an appointment</v-btn>
                                            <span v-if="!$root.user">Please sign in to make an appointment</span>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <BookAppointmentModal v-if="$root.user && !$root.user.isLawyer()"
                                :appointment="selectedAppointment" :dialog.sync="dialog">
                            </BookAppointmentModal>

                        </v-container>
                        <v-pagination class="mt-5" v-if="resources.total > 0" v-model="page" :length="resources.pages">
                        </v-pagination>
                    </div>
                </fetch-json>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Lawyer from '@/api/Lawyer';
    import FetchJson from '@/components/FetchJson'
    import BookAppointmentModal from '@/components/BookAppointmentModal'

    export default {
        name: 'Index',
        components: {
            FetchJson,
            BookAppointmentModal
        },
        data() {
            return {
                api: Lawyer,
                dialog: false,
                selectedAppointment: this.nullAppointment(),
                page: 1,
                name: '',
                order: '',
            }
        },
        computed: {
            filters() {
                return {
                    page: this.page,
                    name: this.name,
                    order: this.order,
                    refresh: this.refresh,
                }
            },
        },
        methods: {
            openDialog(lawyer) {
                this.$set(this.selectedAppointment, 'lawyer', lawyer)
                this.dialog = true;
            },
            nullAppointment() {
                return {
                    id: null,
                    lawyer: null,
                    citizen: null,
                    scheduled_raw: null,
                };
            },
            performSearch() {
                this.page = 1;
                this.refresh = new Date().getTime()
            },
        },
    }
</script>