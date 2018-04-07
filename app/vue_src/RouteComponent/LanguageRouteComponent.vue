<template>
  <div class="container-wrapper after-header">
    <div class="container">
      <h1>{{ $t('language.title_list') }}</h1>
      <router-link class="red-button" to="/new-language">{{ $t('language.button_link_new')}}</router-link>
      <table id="languages-table"></table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        table: null,
        languages: null
      }
    },

    beforeRouteEnter: function (to, from, next) {
      axios.get('/api/language')
      .then(function (response) {
        const data = response.data.data;
        next(vm => vm.setData(data))
      }).catch(function () {
        next(vm => vm.setData([]))
      })
    },

    watch: {
      languages: function () {
        this.setTable();
      }
    },
    methods: {
      setData: function (data) {
        console.log(data.languages)
        this.languages = data.languages;
      },
      setTable: function () {
        this.table = $('#languages-table').DataTable({
          data: this.languages,
          columns: [
            { "data": "id" },
            { "data": "iso_name" },
            { "data": "name" }
          ]
        });
        this.table.draw(true);
      }
    }
  }
</script>

<style scoped>
.red-button {
  margin-bottom: 20px;
}
</style>
