<template>
    <v-datetime-picker :text-field-props="{
        rules,
        'error-messages': errors
        }" label="Select Datetime" :date-picker-props="{min: new Date().toISOString() }" @input="input"
        :time-picker-props="{ format: '24hr','allowed-minutes' : []}" time-format="HH:mm" v-model="model">
        <template slot="dateIcon">
            <v-icon>mdi-calendar</v-icon>
        </template>
        <template slot="timeIcon">
            <v-icon>mdi-clock-outline</v-icon>
        </template>
    </v-datetime-picker>
</template>

<script>
    export default {
        props: ['datetime', 'rules', 'errors'],
        data() {
            return {
                model: this.datetime
            }
        },
        watch: {
            datetime: function (newvalue) {
                this.model = newvalue
            }
        },
        methods: {
            input() {
                this.$emit('update:datetime', this.model)
            }
        }
    }
</script>