<template>
    <span>{{mytimes}}</span>
</template>

<script>
    export default {
        name: "my-time",
        props:['mytimes']
    }
</script>

<style scoped>
    p{
        letter-spacing: 0.05em;
        font-size: 16px;
        padding: 5px 0;
    }
</style>