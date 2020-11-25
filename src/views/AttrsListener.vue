<template>
    <div>
        <at-child :a="a" :b="b" :c="c" @faFun="fatherFun"></at-child>
    </div>
</template>

<script>
    import atchild from "../components/atchild";
    export default {
        name: "AttrsListener",
        data() {
            return {
                a: 'a',
                b: 'b',
                c: 'c',
                g: {
                    g1: '111',
                    g2: '222',
                    g3: '333'
                }
            }
        },
        provide() {
            return {
                proFun: this.provideFun,
                gData: this.g
            }
        },
        components: {
            'at-child': atchild
        },
        mounted() {
            this.csFun({aa: false, bb: 'ggg'})
        },
        methods: {
            csFun({aa = true, bb} = {}) {
                console.log(aa, bb)
            },
            provideFun(e) {
                console.log('provide和inject' + e)
            },
            fatherFun(e) {
                console.log('父方法' + e)
            }
        }
    }
</script>

<style scoped>

</style>
