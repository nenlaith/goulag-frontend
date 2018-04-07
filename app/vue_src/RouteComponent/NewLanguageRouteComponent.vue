<template>
  <div class="container-wrapper after-header">
    <div class="container">
      <h1>{{ $t('language.title_new') }}</h1>
      <div class="form-wrapper">
        <div class="form">
          <div class="form-group">
            <label>{{ $t('language.forms.name') }}</label>
            <input type="text" name="new_name" v-model="new_name">
          </div>
          <div class="form-group">
            <label>{{ $t('language.forms.iso_name') }}</label>
            <input type="text" name="new_iso_name" v-model="new_iso_name">
          </div>
          <div class="form-group-button">
            <button class="red-button" v-on:click="add_new_language()">{{ $t('session.forms.sign_in_button') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    add_new_language: function () {
      const this$ = this;
      axios.put('/api/language/new', {
        name: this.new_name,
        iso_name: this.new_iso_name
      })
      .then(function (response) {
        this$.$router.push({ path: "/language" });
      })
      .catch(function (err) {
        console.log(err.response)
      })
    }
  }
}
</script>

<style scoped>
.form-wrapper {
  width: 450px;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 15px;
  height: 300px;
  margin: auto;
}

.form {
  height: 100%;
}

.form .form-group-button {
  bottom: 0;
  width: 100%;
  position: absolute;
}
</style>
