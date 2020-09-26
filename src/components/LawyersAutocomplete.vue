<template>
  <v-autocomplete :rules="rules" v-model="model" @change="select" :items="items" :loading="isLoading" :search-input.sync="search" color="white"
    hide-no-data hide-selected item-text="text" item-value="value" label="Lawyers" placeholder="Start typing to Search">
  </v-autocomplete>
</template>

<script>
  import Lawyer from '@/api/Lawyer';
  export default {
    props: ['lawyer', 'rules'],
    data() {
      return {
        model: this.lawyer,
        isLoading: false,
        search: null,
        entries: [],
      }
    },
    methods: {
      select() {
        this.$emit('update:lawyer', this.model)
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
        this.entries = (await Lawyer.fetch({
          name: val
        })).data;
      },
    },
  }
</script>