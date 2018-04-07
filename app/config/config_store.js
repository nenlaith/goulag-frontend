const store = {
  init: function (follow_up) {
    this.locale.init()
    this.connection.init(follow_up)
  },

  locale: {
    lang: null,
    init: function () {
      this.lang = window.navigator.language.match(/[a-z]{2}/)
    }
  },

  connection: {
    state: {
      connected: false,
      id: null,
      type: null,
      username: null
    },
    
    is_connected: function () {
      return this.state.connected;
    },

    user_type: function () {
      return this.state.type;
    },

    user_type_int: function () {
      const coucou = {
        'none': 0,
        'user': 1,
        'admin': 2,
        'super_admin': 3
      };
      return coucou[this.state.type];
    },

    init: function(follow_up) {
      this.is_logged(follow_up);
    },

    set_state: function (data) {
      console.log(data);
      this.state = {
        connected: true,
        id: data.id,
        type: data.usertype,
        username: data.username
      };
    },

    unset_state: function () {
      this.state = {
        connected: false,
        id: null,
        type: null,
        username: null
      }
    },


    is_logged: function (follow_up) {
      const this$ = this;
      axios.get('/api/logged')
      .then(function (response) {
        console.log(response);
        this$.set_state(response.data.data)
        follow_up();
      })
      .catch(function (error) {
        console.log(error.response);
        this$.unset_state()
        follow_up();
      });
    },



    connection: function(data, follow_up, error_follow_up) {
      const this$ = this;
      axios.post('/api/login', {
        username: data.username,
        password: data.password
      })
      .then(function (response) {
        this$.set_state(response.data.data)
        follow_up()
      })
      .catch(function (error) {
        error_follow_up(error)
      });
    },




    deconnection: function(follow_up, error_follow_up) {
      const this$ = this;
      axios.post('/api/logout')
      .then(function (response) {
        console.log(response);
        this$.unset_state()
        follow_up()
      })
      .catch(function (error) {
        error_follow_up(error)
      });
    }
  }
}

export default store;
