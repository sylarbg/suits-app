<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="indigo" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <div v-if="hasError('general')" class="error--text">{{ firstError('general') }}</div>
            <v-form ref="form">

              <v-text-field :rules="[rules.required, rules.email]" v-model="form.email" label="Email" name="email"
                prepend-icon="mdi-email" type="email">
              </v-text-field>

              <v-text-field v-model="form.password" id="password" label="Password" name="password"
                prepend-icon="mdi-lock" :rules="[rules.required]" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import User from "@/api/User";
  import Rules from '@/mixins/Rules'
  import ErrorsBag from "@/mixins/ErrorsBag";

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          'email': '',
          'password': '',
        },
      }
    },
    mixins: [ErrorsBag, Rules],
    methods: {
      async login() {
        if (!this.$refs.form.validate()) {
          return;
        }
        try {
          await User.login(this.form)
          this.$router.push({
            name: "Lawyers"
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