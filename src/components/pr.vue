<template>
    <div>
        <p>{{bbmsg}}</p>
        <p>{{msg}}</p>
        <button @click="showBaba">show我的粑粑</button>
    </div>
</template>

<script>
    export default {
        name: "pr",
        data() {
            return {
                msg: '儿子的msg'
            }
        },
        props: {
            bbmsg: {type: String}
        },
        methods: {
            showBaba() {
                console.log(this.$parent)
                console.log(this.$parent.msg)
                this.$parent.funParent()
            },
            funChildren() {
                console.log('子方法')
            }
        }
    }
</script>

<style scoped>

</style>
