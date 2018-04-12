<template>
    <span>{{mycopy}}</span>
</template>

<script>
    export default {
        name: "copy-right",
        data(){
            return{
                mycopy:'CopyRight © 2018 by lxl.'
            }
        }
    }
</script>

<style scoped>
    p {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 0px 0 0;
    }
</style>