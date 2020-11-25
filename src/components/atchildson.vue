<template>
    <div>
        <p>{{$attrs.a}}</p>
        <p>{{$attrs.b}}</p>
    </div>
</template>

<script>
    export default {
        name: "atchildson",
        inject: ['proFun'],
        mounted() {
            this.$emit('faFun', '孙触发')
            this.proFun('孙触发')
        }
    }
</script>

<style scoped>

</style>
