<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="indigo" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-select v-model="form.type" :items="userTypes" item-text="text" item-select="value"
                prepend-icon="mdi-account-question" label="Type"></v-select>

              <v-text-field label="Name" v-model="form.name" :rules="[rules.required]" name="name"
                prepend-icon="mdi-account" :error-messages="firstError('name')" type="text"></v-text-field>

              <v-text-field label="Email" v-model="form.email" :rules="[rules.required, rules.email]" name="email"
                prepend-icon="mdi-email" :error-messages="firstError('email')" type="text"></v-text-field>

              <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                v-model="form.password" type="password" :rules="[rules.required]"
                :error-messages="firstError('password')"></v-text-field>

              <v-text-field id="password_confirmation" label="Password Confirmation" name="password_confirmation"
                v-model="form.password_confirmation" prepend-icon="mdi-lock"
                :rules="[rules.required, (form.password === form.password_confirmation) || 'Password must match']"
                type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="register" color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Auth from "@/api/Auth";
  import Rules from "@/mixins/Rules";
  import ErrorsBag from "@/mixins/ErrorsBag";  
  import { EventBus } from '@/services/EventBus';

  export default {
    name: 'Register',
    mixins: [ErrorsBag, Rules],    
    data() {
      return {
        userTypes: [{
            text: "Citizen",
            value: 1
          },
          {
            text: "Lawyer",
            value: 2
          }
        ],
        form: {
          'type': 1,
          'name': '',
          'email': '',
          'password': '',
          'password_confirmation': '',
        },
      }
    },
    methods: {
      async register() {
        if (!this.$refs.form.validate()) {
          return;
        }
        try {
          await Auth.register(this.form);
          
          EventBus.$emit('notification', {
            text: 'You have successfully registered'
          });

          this.$router.push({
            name: "Login"
          });          
        } catch ({
          response
        }) {
          if (response.status == 422) {
            this.errors.record(response.data.errors);
          }
        }
      }
    }
  }
</script>