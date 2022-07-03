<!--HTML-->
<template>
    <div>
        <div>{{shop.store}}</div>
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{shop.addressName}}</h5>
            <small>Open: {{shop.todayOpen}} - {{shop.todayClose}}</small>
        </div>

        <p class="mb-1" v-if="shop.city">
            City: {{shop.city}}
        </p>
        <small>
            Sunday open: 
            <b-icon v-if="shop.sundayOpen" icon="emoji-smile" aria-hidden="true" variant="warning"></b-icon>
            <b-icon v-else icon="emoji-frown" aria-hidden="true"></b-icon>
        </small>
    </div>
</template>

<!--SCRIPTS-->
<script>
export default {
    name: 'Shop',
    props: {
        shop: Object,
    }
};
</script>