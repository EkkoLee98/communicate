<template>
    <div>
        <cm-page v-model="ap"></cm-page>
        <p>{{ap}}</p>
    </div>
</template>

<script>
    import cm from '../components/cm'
    export default {
        name: "CumModel",
        data() {
            return {
                ap: 2
            }
        },
        components: {
            'cm-page': cm
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
