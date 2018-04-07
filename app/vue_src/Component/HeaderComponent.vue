<template>
  <div>
    <div class="header-container-wrapper"></div>
    <header class="container-wrapper header-container-wrapper">
      <div class="container header-container">
        <div class="header-logo-wrapper left">
          <img id="header-logo" src="/logo.png" />
        </div>
        <div class="header-title-wrapper left">
          <h1>{{ $t('general.site_name') }}</h1>
        </div>
        <div class="header-link-wrapper left">
          <router-link to="/home">{{ $t('home.link_header') }}</router-link>
        </div>
        <div class="header-link-wrapper left">
          <router-link to="/list">{{ $t('list.link_header') }}</router-link>
        </div>
        <div v-if="user_type >= 1" class="header-link-wrapper left">
          <router-link to="/vote">{{ $t('vote.link_header') }}</router-link>
        </div>
        <div v-if="user_type >= 2" class="header-link-wrapper left">
          <router-link to="/defendant">{{ $t('defendant.link_header') }}</router-link>
        </div>
        <div v-if="user_type >= 3" class="header-link-wrapper left">
          <router-link to="/language">{{ $t('language.link_header') }}</router-link>
        </div>
        <div v-if="connected" class="header-link-wrapper right">
          <button v-on:click="deconnection">{{ $t('session.deconnection')}}</button>
        </div>
        <div v-else class="header-link-wrapper right">
          <router-link to="/session">{{ $t('session.link_header') }}</router-link>
        </div>
        <div class="float-cutter"></div>
      </div>
    </header>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {}
    },
    computed: {
      connected: function() {
        return this.$root.$data.connection.is_connected()
      },
      user_type: function() {
        return this.$root.$data.connection.user_type_int()
      }
    },
    methods: {
      deconnection: function () {
        const this$ = this;
        this$.$root.$data.connection.deconnection(function () {
          this$.$router.push({ path: '/home' })
        }, function (error) {

          console.log(error.response);
        });
      }
    }
  }
</script>

<style scoped>

#header-logo {
  max-height: 100%;
}

.header-container-wrapper {
  height: 75px;
  background-color: #FFFFFF;
}

header.header-container-wrapper {
  position: fixed;
  top: 0;
  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
}

.header-logo-wrapper {
  padding: 10px 0;
}

header {
  font-size: 20px;
}

header h1 {
  margin: 0;
  padding: 10px 0 0 0;
  box-sizing: border-box;
  text-transform: capitalize;
  border: none;
}

.header-title-wrapper, .header-link-wrapper, .header-logo-wrapper {
  height: 100%;
}

header button {
  display: block;
  box-sizing: border-box;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0 0 0 0;
  text-transform: capitalize;
  font-size: 20px;
}

header a {
  display: block;
  height: 100%;
  padding-top: 25px;
  box-sizing: border-box;
  text-transform: capitalize;
  color: #272F31;
}

header .left + .left {
  margin-left: 40px;
}

header .header-logo-wrapper + .header-title-wrapper {
  margin-left: 10px;
}

header .right + .right {
  margin-right: 40px;
}
</style>
