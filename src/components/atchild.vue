<template>
    <div>
        <p>{{$attrs.a}}</p>
        <p>{{c}}</p>
        <at-childson v-bind="$attrs" v-on="$listeners"></at-childson>
    </div>
</template>

<script>
    import atchildson from "./atchildson";
    export default {
        name: "atchild",
        props: {
            c: {type: String}
        },
        inject: ['gData', 'proFun'],
        components: {
            'at-childson': atchildson
        },
        mounted() {
            console.log(this.$attrs)
            this.$emit('faFun', '子触发')
            console.log(this.gData)
            this.proFun('子触发')
        }
    }
</script>

<style scoped>

</style>
