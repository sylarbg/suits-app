<template>
    <v-container class="" fluid>
        <v-row>   
            <v-col cols="12" sm="12" md="12">
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="name" prepend-icon="mdi-account-search" label="Name"
                                    @keyup.stop="performSearch" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-select @change="performSearch"
                                    :items='[ {text: "Name (A-Z)", value: "name" }, {text: "Name (Z-A)", value: "-name" }  ]'
                                    item-text="text" v-model="order" item-select="value" prepend-icon="mdi-sort"
                                    label="Type">
                                </v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>

                <div class="text-center" v-if="loading">
                    <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
                </div>
                <v-container fluid v-if="!loading">
                    <v-row dense>
                        <v-col v-for="resource in resources.items" :key="resource.id" cols="6">
                            <v-card>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title class="headline">{{ resource.name }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ resource.email }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn icon>
                                        <v-icon>mdi-bookmark</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-container>
                <v-pagination class="mt-5" v-if="resources.total > 0" v-model="page" @input="selectPage"
                    :length="resources.pages"></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Lawyer from '@/api/Lawyer';

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
                name: '',
                order: '',
            }
        },
        computed: {
            resourceRequestQueryString() {
                return {
                    name: this.name,
                    order: this.order,
                }
            },
        },
        methods: {
            performSearch() {
                this.page = 1;
                this.getResources()
            },
            async getResources() {
                this.loading = true;
                const result = await Lawyer.fetch({
                    page: this.page,
                    ...this.resourceRequestQueryString
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
        }
    }
</script>