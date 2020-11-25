<template>
    <div>
        <p>{{ac}}</p>
        <button @click="plusNum">+</button>
    </div>
</template>

<script>
    export default {
        name: "pe",
        data() {
            return {
                ac: 0
            }
        },
        props: {
            aa: {type: Number, default: 0}
        },
        watch: {
            aa: {
                handler(n) {
                    console.log(n)
                    if (this.ac !== n) {
                        this.ac = n
                    }
                },
                immediate: true
            }
        },
        methods: {
            plusNum() {
                this.ac++
                this.$emit('numPlus', this.ac)
            }
        }
    }
</script>

<style scoped>

</style>
