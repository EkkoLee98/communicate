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
            value: {type: Number, default: 0}
        },
        watch: {
            value: {
                handler(n) {
                    console.log(n)
                    if (this.ac !== n) {
                        this.ac = n
                    }
                },
                immediate: true
            },
            ac: {
                handler(n) {
                    this.$emit('input', n)
                }
            }
        },
        methods: {
            plusNum() {
                this.ac++
            }
        }
    }
</script>

<style scoped>

</style>
