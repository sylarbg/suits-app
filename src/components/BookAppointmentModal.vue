<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-form ref="form">
        <v-card-title>
          <span class="headline">
            <slot name="title"></slot>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <div v-if="appointment.lawyer">
                  Laywer : {{ appointment.lawyer.name }}
                </div>
                <Autocomplete v-else :rules="[rules.required]" label="Lawyer" :errors="firstError('lawyer')"
                  :source="source" :user.sync="lawyer" />
              </v-col>
              <v-col cols="12">
                <DatePicker :errors="firstError('datetime')" :rules="[rules.required]" :datetime.sync="datetime">
                </DatePicker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" text @click="submit">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
  import Lawyer from '@/api/Lawyer';
  import Rules from '@/mixins/Rules';  
  import ErrorsBag from "@/mixins/ErrorsBag";  
  import EventBus from '@/services/EventBus';
  import Appointment from '@/api/Appointment';
  import DatePicker from '@/components/DatePicker';  
  import Autocomplete from '@/components/Autocomplete';

  export default {
    components: {
      DatePicker,
      Autocomplete
    },
    mixins: [ErrorsBag, Rules],
    props: {
      dialog: {},
      appointment: {
        type: Object,
        default: function () {
          return {
            id: null,
            lawyer: null,
            scheduled_raw: null,
          }
        }
      }
    },
    data() {
      return {
        source: Lawyer,
        lawyer: null,
        datetime: null,
      }
    },
    watch: {
      appointment: {
        handler: function (newValue) {
          this.datetime = newValue.scheduled_raw ? new Date(newValue.scheduled_raw) : null;
          this.lawyer = newValue.lawyer.id;
        },
        deep: true,
      }
    },
    methods: {
      async submit() {
        if (!this.$refs.form.validate()) {
          return;
        }

        if (this.appointment.id) {
          this.update();
          return;
        }

        this.create();
      },
      async create() {
        try {
          console.log(this.lawyer)
          await Appointment.post(this.lawyer, {
            datetime: this.datetime
          });

          this.notify('Your request was submitted');
          this.close();
          EventBus.$emit('appointment:updated');
        } catch ({
          response
        }) {
          this.handleErrors(response)
        }
      },
      async update() {
        try {
          await Appointment.reschedule(this.appointment.lawyer.id, this.appointment.id, {
            datetime: this.datetime
          });
          EventBus.$emit('appointment:updated');
          this.notify('Your appointment was updated')
          this.close();
        } catch ({
          response
        }) {
          this.handleErrors(response);
        }
      },
      handleErrors(response) {
        if (response.status == 422) {
          this.errors.record(response.data.errors);
        }
      },
      notify(message) {
        EventBus.$emit('notification', {
          text: message
        });
      },
      close() {
        this.$refs.form.reset();
        this.errors.reset();
        this.$emit('update:dialog', false)
      }
    },
  }
</script>