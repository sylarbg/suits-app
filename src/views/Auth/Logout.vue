<script>
    import User from '@/api/User'
    export default {
        async created() {
            await User.logout();
            this.$router.push({
                name: "Login"
            });
        },
        render() {
            return {}
        }

    }
</script>