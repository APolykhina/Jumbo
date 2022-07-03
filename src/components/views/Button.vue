<!--HTML-->
<template>
    <b-button size="lg" variant="outline-warning">{{infoName}}</b-button>
</template>

<!--SCRIPTS-->
<script>
export default {
    name: 'Button',
    props: {
        infoName: String,
    }
};
</script>

<!--STYLES-->
<style lang="scss" scoped>
button {
    border-radius: 23px;
}
</style>