<!--HTML-->
<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-input-group>
          <b-form-input data-test="filter" v-model="filteredValue" placeholder="Search by address or city..."/>
        </b-input-group>
      </b-col>
      <b-col data-test="not-stores" v-if="!stores.length">
        <h2>Stores in such place don't exist</h2>
      </b-col>
      <b-col v-else data-test="stores">
        <b-list-group id="stores">
          <b-list-group-item v-for="store in stores" :key="store.uuid">
            <Shop :shop="store" />
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<!--SCRIPTS-->
<script>
import { BCol, BContainer, BFormInput, BInputGroup, BListGroup, BListGroupItem, BRow } from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import { mapFields} from 'vuex-map-fields';
import { GET_STORES, CHANGE_FILTERED_VALUE_STATE } from '../../store';
import Shop from '../views/Shop.vue';

export default {
    name: "Shops",
    // reset filtered value
    beforeMount() {
        this.$store.commit(CHANGE_FILTERED_VALUE_STATE, null);
    },
    // some computed properties 
    computed: {
        ...mapFields(['filteredValue']),
        ...mapGetters({
            stores: GET_STORES,
        })
    },
    // components
    components: { 
      Shop: Shop,
      'b-container': BContainer,
      'b-row': BRow,
      'b-col': BCol,
      'b-list-group': BListGroup,
      'b-form-input': BFormInput,
      'b-input-group': BInputGroup,
      'b-list-group-item': BListGroupItem }
};
</script>

<!--STYLES-->
<style>
#stores {
  max-height: 600px;
  overflow-y: scroll;
}
</style>