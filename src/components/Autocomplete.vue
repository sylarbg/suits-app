<template>
  <v-autocomplete :error-messages ="errors" :rules="rules" v-model="model" @change="select" :items="items" :loading="isLoading" :search-input.sync="search" color="white"
    hide-no-data hide-selected item-text="text" :label="label" item-value="value" placeholder="Start typing to Search">
  </v-autocomplete>
</template>

<script>
  export default {
    props: ['user', 'rules', 'errors', 'source', 'label'],
    data() {
      return {
        model: this.user,
        isLoading: false,
        search: null,
        entries: [],
      }
    },
    methods: {
      select() {
        this.$emit('update:user', this.model)
      }
    },
    computed: {
      items() {
        return this.entries.map(entry => {
          return {
            text: entry.name,
            value: entry.id
          };
        })
      },
    },
    watch: {
      async search(val) {
        this.entries = (await this.source.fetch({
          name: val
        })).data;
      },
    },
  }
</script>