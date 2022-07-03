<!--HTML-->
<template>
  <div>
    <div v-if="isLoading">
        <h2>Loading data ...</h2>
    </div>
    <div v-else-if="error">
        <h2>Something wrong with getting data: {{error}}</h2>
    </div>
    <div v-else-if="show === 'stores'">
        <Shops />
    </div>
    <div v-else-if="show === 'cities'">
        <Cities />
    </div>
  </div>
</template>

<!--SCRIPTS-->
<script>
import { mapGetters } from 'vuex';
import {mapFields} from 'vuex-map-fields'
import Shops from './Shops.vue';
import { FETCH_STORES, GET_SHOW } from '../../store';
import Cities from './Cities.vue';

export default {
    name: "Content",
    // load shops before component will be mounted 
    beforeMount() {
        this.$store.dispatch(FETCH_STORES);
    },
    // some computed properties 
    computed: {
        ...mapFields(['isLoading', 'error']),
        ...mapGetters({
            show: GET_SHOW,    
        })
    },
    // components
    components: { Shops, Cities }
};
</script>