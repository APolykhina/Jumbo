<!--HTML-->
<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-input-group>
          <b-form-input v-model="filteredValue" placeholder="Search by address or city..."/>
        </b-input-group>
      </b-col>
      <b-col v-if="!stores.length">
        <h2>Stores in such place don't exist</h2>
      </b-col>
      <b-col v-else>
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
    components: { Shop }
};
</script>

<!--STYLES-->
<style>
#stores {
  max-height: 600px;
  overflow-y: scroll;
}
</style>