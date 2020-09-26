<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-form ref="form">
        <v-card-title>
          <span class="headline">Make Appointment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <div v-if="selectedLawyer" >
                  Laywer : {{ selectedLawyer.name }}
                </div>
                <LawyersAutocomplete v-else :rules="[rules.required]" :lawyer.sync="lawyer" />
              </v-col>
              <v-col cols="12">
                <DatePicker :rules="[rules.required]" :datetime.sync="datetime"></DatePicker>
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
  import DatePicker from '@/components/DatePicker';
  import LawyersAutocomplete from '@/components/LawyersAutocomplete';
  import Rules from '@/mixins/Rules'
  import ErrorsBag from "@/mixins/ErrorsBag";
  // import Appointment from '@/api/Appointment';
  //import { EventBus } from '@/services/EventBus';

  export default {
    components: {
      DatePicker,
      LawyersAutocomplete
    },
    mixins: [ErrorsBag, Rules],
    props: ['dialog', 'selectedLawyer'],
    data() {
      return {
        lawyer: null,
        datetime: null,
      }
    }, 
    watch: {
        selectedLawyer: function(newValue, ) {
            if (newValue === null) {
                this.value = null;
            }

            if (typeof newValue == 'object') {
                this.lawyer = newValue.id;
            }
        },
        },   
    methods: {
      submit() {
        if (!this.$refs.form.validate()) {
          return;
        }

        this.$emit('submit', {
            lawyer: this.lawyer,
            datetime: this.datetime
        });
      return;

        // Appointment.post(this.lawyer, {datetime: this.datetime});      
        // this.close();
         
        // EventBus.$emit('notification', {
        //     text: 'Your request was submitted'
        // });

        // this.$router.push({
        //   name: "Appointments"
        // });
      },
      close() {
        this.$refs.form.reset();
        this.$emit('update:dialog', false)
      }
    },
  }
</script>