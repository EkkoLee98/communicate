<template>
    <div>
        <pr-page :bbmsg="msg"></pr-page>
        <button style="margin-top: 10px" @click="showErzi">show我的儿子</button>
    </div>
</template>

<script>
    import pr from '../components/pr'
    export default {
        name: "ParentChildren",
        data() {
            return {
                msg: '爸爸的msg'
            }
        },
        components: {
            'pr-page': pr
        },
        methods: {
            funParent() {
                console.log('父方法')
            },
            showErzi() {
                console.log(this.$children)
                console.log(this.$children[0].msg)
                this.$children[0].funChildren()
            }
        }
    }
</script>

<style scoped>

</style>
