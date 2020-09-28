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
                <div v-if="appointment.citizen">
                  Citizen : {{ appointment.citizen.name }}
                </div>
                <Autocomplete label="Citizen" :source="source" v-else :rules="[rules.required]"
                  :errors="firstError('lawyer')" :user.sync="user" />
              </v-col>
              <v-col cols="12">
                <DatePicker :errors="firstError('datetime')" :rules="[rules.required]" :datetime.sync="datetime">
                </DatePicker>
              </v-col>

              <v-col cols="12">
                <v-select v-model="status" :items="statuses" item-text="text" item-select="value" label="Status">
                </v-select>
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
  import Rules from '@/mixins/Rules'
  import Citizen from '@/api/Citizen';
  import EventBus from '@/services/EventBus';
  import ErrorsBag from "@/mixins/ErrorsBag";
  import Appointment from '@/api/Appointment';
  import DatePicker from '@/components/DatePicker';
  import Autocomplete from '@/components/Autocomplete';
  import AppointmentStatuses from '@/services/AppointmentStatuses'

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
            citizen: null,
          }
        }
      }
    },
    computed: {
      statuses() {
        return Object.values(AppointmentStatuses)
      }
    },
    data() {
      return {
        status: null,
        source: Citizen,
        user: null,
        datetime: null,
      }
    },
    watch: {
      appointment: {
        deep: true,
        handler(newValue) {
          if (newValue.id === null) {
            this.datetime = null;
            this.citizen = null;
          }

          if (newValue.id) {
            this.datetime = new Date(newValue.scheduled_raw);
            this.user = newValue.citizen.id;
            this.status = newValue.status.id;
          }
        }
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
          await Appointment.post(this.$root.user.id, {
            user_id: this.user,
            datetime: this.datetime,
            status: this.status,
          });

          this.notify('Your appointment was created');
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
          await Appointment.update(this.appointment.lawyer.id, this.appointment.id, {
            datetime: this.datetime,
            status: this.status,
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
        this.datetime = null;
        this.$refs.form.reset();
        this.errors.reset();
        this.$emit('update:dialog', false)
      }
    },
  }
</script>