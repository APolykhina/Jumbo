<!--HTML-->
<template>
    <b-button size="lg" variant="outline-warning">{{infoName}}</b-button>
</template>

<!--SCRIPTS-->

<script>
import { BButton } from 'bootstrap-vue';

export default {
    name: 'Button',
    props: {
        infoName: String,
    },
    components: {
        'b-button': BButton,
    }
};
</script>

<!--STYLES-->
<style lang="scss" scoped>
button {
    border-radius: 23px;
}
</style>