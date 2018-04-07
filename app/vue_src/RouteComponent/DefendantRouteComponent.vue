<template>
  <div class="container-wrapper after-header">
    <div class="container">
      <h1>{{ $t('defendant.title_list') }}</h1>
      <router-link class="red-button" to="/new-defendant">{{ $t('defendant.button_link_new') }}</router-link>
      <table id="defendants-table"></table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        table: null,
        defendants: null
      }
    },
    beforeRouteEnter: function (to, from, next) {
      axios.get('/api/defendant')
      .then(function (response) {
        const data = response.data.data;
        next(vm => vm.setData(data))
      }).catch(function () {
        next(vm => vm.setData([]))
      })
    },
    watch: {
      defendants: function () {
        console.log('watched');
        this.setTable();
      }
    },
    methods: {
      setData: function (data) {
        console.log(data.defendants)
        this.defendants = data.defendants;
      },
      setTable: function () {
        console.log(this.defendants)
        this.table = $('#defendants-table').DataTable({
          data: this.defendants,
          columns: [
            { "data": "id" },
            { "data": "defendant_url" },
            { "data": "image_url" },
            { "data": "inserted_at" },
            { "data": "updated_at"}
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
