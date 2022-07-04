<!--HTML-->
<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>Cities</h2>
        <b-list-group data-test="cities" id="cities">
          <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="city in cities" 
          :key="city" :id="city" @click="changeFilteredValue(city)" v-bind:active="filteredValue === city">
            <h5>{{city}}</h5>
            <p>{{countOfStores[city]}}</p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col data-test="stores" v-if="stores.length">
        <h2>Stores per city</h2>
        <b-list-group-item v-for="store in stores" :key="store.uuid">
            <Shop :shop="store" />
          </b-list-group-item>
      </b-col>
    </b-row>
  </b-container>
</template>

<!--SCRIPTS-->
<script>
import { mapGetters, mapMutations } from 'vuex';
import { mapFields} from 'vuex-map-fields';
import {GET_STORES_PER_CITY, CHANGE_FILTERED_VALUE_STATE} from './../../store';
import Shop from '../views/Shop.vue';
import { BCol, BContainer, BListGroup, BListGroupItem, BRow } from 'bootstrap-vue';

export default {
    name: "Cities",
    // reset filtered value
    beforeMount() {
        this.$store.commit(CHANGE_FILTERED_VALUE_STATE, null);
    },
    // some computed properties 
    computed: {
        ...mapFields(['countOfStores', 'cities', 'filteredValue']),
        ...mapGetters({
            stores: GET_STORES_PER_CITY,
        })
    },
    // components
    components: { 
      Shop: Shop, 
      'b-list-group': BListGroup,
      'b-col': BCol,
      'b-row': BRow,
      'b-container': BContainer,
      'b-list-group-item': BListGroupItem },
    // methods
    methods: {
        ...mapMutations({
            changeFilteredValue: CHANGE_FILTERED_VALUE_STATE
        })
    }
};
</script>

<!--STYLES-->
<style>
#cities {
  max-height: 600px;
  overflow-y: scroll;
}
#cities > div {
    cursor: pointer;
}
#cities > div {
    cursor: pointer;
}
#cities > div.active {
   background-color: #bec2c6;
   border-color: #bec2c6;
}
#cities > div > h5 {
    color: #fdc513;
}
</style>