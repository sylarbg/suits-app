<script>
  import debounce from 'lodash/debounce'

  export default {
    mounted() {},
    props: ['filters', 'api'],
    data() {
      return {
        resources: {
          total: 0,
          items: [],
          pages: 0,
        },
        loading: false
      }
    },
    watch: {
      filters: {
        handler: function () {
          this.getResources();
        }
      },
      deep: true,
    },
    async created() {


      await this.getResources();
    },

    methods: {
      debouncer: debounce(async callback => await callback(), 100),
      async getResources() {
        this.debouncer(async () => {
          this.loading = true;
          try {
            const result = await this.api.fetch(this.filters);
            this.resources.items = result.data;
            this.resources.pages = result.meta.last_page
            this.resources.total = result.meta.total

          } catch (e) {
            console.log(e);
          }
          this.loading = false;
        })
      },
    },
    render() {
      return this.$scopedSlots.default({
        resources: this.resources,
        loading: this.loading
      })
    }
  }
</script>