<!--HTML-->
<template>
    <div>
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" data-test="shop-address">{{shop.addressName}}</h5>
            <small data-test="shop-time">Open: {{shop.todayOpen}} - {{shop.todayClose}}</small>
        </div>

        <p data-test="shop-city" class="mb-1" v-if="shop.city">
            City: {{shop.city}}
        </p>
        <small>
            Sunday open: 
            <b-icon data-test="shop-open" v-if="shop.sundayOpen" icon="emoji-smile" aria-hidden="true" variant="warning"></b-icon>
            <b-icon data-test="shop-close" v-else icon="emoji-frown" aria-hidden="true"></b-icon>
        </small>
    </div>
</template>

<!--SCRIPTS-->
<script>
import { BIcon } from 'bootstrap-vue';

export default {
    name: 'Shop',
    props: {
        shop: Object,
    },
    components: {
        'b-icon': BIcon,
    }
};
</script>