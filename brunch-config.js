// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app.*(js|vue)$/
    }
  },
  stylesheets: {
    joinTo: {
      'app.css' : /^app.*(css)$/
    }
  }
};

exports.plugins = {
  babel: {
    presets: ['env']
  },
  vue: {
    extractCSS: false,
    // out: 'public/components.css'
  }
};

exports.npm = {
  enabled: true,
  globals: {
    axios: 'axios'
  },
  aliases: {
    vue: "vue/dist/vue.js",
    'vue-router': "vue-router/dist/vue-router.js",
    'vue-i18n': "vue-i18n/dist/vue-i18n.js"
  }
};
