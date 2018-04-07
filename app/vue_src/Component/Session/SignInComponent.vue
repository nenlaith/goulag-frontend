<template>
<div class="session-container">
  <h2>{{ $t('session.sign_in') }}</h2>
  <div class="form">
    <div class="form-group">
      <label>{{ $t('session.forms.username') }}</label>
      <input type="text" name="username_sign_in" v-bind:placeholder="$t('session.forms.username_placeholder')" v-model="username_sign_in">
    </div>
    <div class="form-group">
      <label>{{ $t('session.forms.password') }}</label>
      <input type="password" name="password_sign_in" v-bind:placeholder="$t('session.forms.password_placeholder')" v-model="password_sign_in">
    </div>
    <div class="form-group-button">
      <button class="red-button" v-on:click="sign_in()">{{ $t('session.forms.sign_in_button') }}</button>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios';

export default {
  methods: {
    sign_in: function() {
      // console.log(this.$root.$data);
      const this$ = this;
      this.$root.$data.connection.connection({
        username: this$.username_sign_in,
        password: this$.password_sign_in
      }, function () {
        this$.$router.push({ path: "home" });
      }, function (error) {
        console.log(error.response)
      })
    }
  }
}
</script>

<style scoped>
.session-container {
  width: 48%;
  float: left;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 15px;
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.session-container .form {
  height: 100%;
  position: relative;
}

.session-container .form .form-group-button {
  bottom: 0;
  width: 100%;
  position: absolute;
}

.session-container h2 {
  text-transform: capitalize;
}

.session-container + .session-container {
  margin-left: 4%;
}

.session-container h2 {
  margin-bottom: 35px;
}
</style>
