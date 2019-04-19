<template>
  <v-container fill-height id="donate">
    <v-layout align-center justify-center>
      <v-flex class="login-form text-xs-center">
        <div class="display-1 mb-3">
          <v-icon class="mr-2" large="large">work</v-icon>Launch Your Donation Project
        </div>
        <v-card light="light">
          <v-card-text>
            <div class="subheading">
              <template>Fill the form</template>
            </div>
            <v-form>
              <v-text-field
                v-model="user.name"
                light="light"
                prepend-icon="person"
                label="Beneficiary and Sponsor"
              ></v-text-field>
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
                label="Estimated point"
                type="text"
              ></v-text-field>
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    slot="activator"
                    label="End time"
                    prepend-icon="date_range"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
              </v-menu>
              <v-btn
                @click.prevent
                block="block"
                @click="submit"
                color="cyan"
                class="white--text"
                type="submit"
              >
                Submit
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
        name: "",
        email: "",
        password: "",
        dollars: "",
        date: "",
        endtime: null
      },
      options: {},
      menu2: false,
      date: new Date().toISOString().substr(0, 10),
    };
  },

  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // submit
        }
      });
    }
  }
};
</script>

<style lang="scss">
#donate {
  width: 40%;
}
</style>
