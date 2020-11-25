<template>
    <div>
        <cs-page :aa.sync="ap"></cs-page>
        <p>{{ap}}</p>
    </div>
</template>

<script>
    import cs from '../components/cs'
    export default {
        name: "CumSync",
        data() {
            return {
                ap: 2
            }
        },
        components: {
            'cs-page': cs
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
