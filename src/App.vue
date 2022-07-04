<!--HTML-->
<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col align-v="center">
          <Header />
        </b-col>
        <b-col class="align-items-center d-flex text-center">
          <b-button-group >
            <Button data-test="stores" v-on:click.native="changeShow('stores')" info-name="Show stores"/>
            <Button data-test="cities" v-on:click.native="changeShow('cities')" info-name="Show cities"/>
          </b-button-group>
        </b-col>
      </b-row>     
    </b-container>
    <Content />
  </div>
</template>

<!--SCRIPTS-->
<script>
import Content from './components/containers/Content.vue';
import Header from './components/views/Header.vue';
import Button from './components/views/Button.vue';
import { mapMutations } from 'vuex';
import { CHANGE_SHOW_STATE } from './store';
import { BButtonGroup, BCol, BContainer, BRow } from 'bootstrap-vue';


export default {
  name: "App",
  components: {
    Header: Header,
    Button: Button,
    Content: Content,
    'b-container': BContainer,
    'b-row': BRow,
    'b-col': BCol,
    'b-button-group': BButtonGroup
},
  // methods handlers
  methods: {
    ...mapMutations({
      changeShow: CHANGE_SHOW_STATE
      })
  }
};
</script>


<!--STYLES-->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
