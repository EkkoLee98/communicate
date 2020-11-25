<template>
    <div>
        <p>{{ac}}</p>
        <button @click="plusNum">+</button>
    </div>
</template>

<script>
    export default {
        name: "cs",
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
            },
            ac: {
                handler(n) {
                    this.$emit('update:aa', n)
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
