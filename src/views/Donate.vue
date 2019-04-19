<template>
  <v-container fill-height id="donate">
    <v-layout align-center justify-center>
      <v-flex class="login-form text-xs-center">
        <div class="display-1 mb-3">
          <v-icon class="mr-2" large="large">work</v-icon>Donate you points
        </div>
        <v-card light="light">
          <v-card-text>
            <div class="subheading">
              <template>Fill the form</template>
            </div>
            <v-form>
              <v-text-field v-model="user.name" light="light" prepend-icon="person" label="Name"></v-text-field>
              <v-text-field
                v-model="user.email"
                v-validate="'email'"
                data-vv-name="email"
                :error-messages="errors.collect('email')"
                light="light"
                prepend-icon="email"
                label="Email"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                light="light"
                prepend-icon="lock"
                label="Password"
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="user.dollars"
                v-validate="'between:1,1000000'"
                data-vv-name="dollars"
                :error-messages="errors.collect('dollars')"
                light="light"
                prepend-icon="attach_money"
                label="donate dollars"
                type="text"
              ></v-text-field>
              <v-btn
                @click.prevent
                block="block"
                @click="submit"
                color="cyan"
                class="white--text"
                type="submit"
              >Submit
              <v-icon right dark>cloud_upload</v-icon>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <div v-if="options.isLoggingIn">
          Don't have an account?
          <v-btn light="light" @click="options.isLoggingIn = false">
            Sign up
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        dollars: '',
      },
      options: {}
    };
  },

  methods: {
      submit() {
          this.$validator.validateAll().then((result) => {
              if(result) {
                  // submit
              }
          });
      },
  },
};
</script>

<style lang="scss">
#donate {
  width: 40%;
}
</style>
