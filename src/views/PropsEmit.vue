<template>
    <div>
        <pe-page :aa="ap" @numPlus="getPlus"></pe-page>
    </div>
</template>

<script>
    import pe from '../components/pe'
    export default {
        name: "PropsEmit",
        data() {
            return {
                ap: 2
            }
        },
        components: {
            'pe-page': pe
        },
        methods: {
            getPlus(n) {
                console.log(n)
                this.ap = n
            }
        }
    }
</script>

<style scoped>

</style>
