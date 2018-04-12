<template>
    <span>

        <slot>
            只有在没有要分发的内容时才会显示。
        </slot>
    </span>
</template>

<script>
    export default {
        name: "date"
    }
</script>

<style scoped>
    p {
        letter-spacing: 0.1em;
        font-size: 15px;
    }
</style>