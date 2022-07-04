<template>
    <b-jumbotron id="header">
        <template #header>JUMBO</template>
        <template #lead>Technical assignment</template>
    </b-jumbotron>
</template>

<script>
import { BJumbotron } from 'bootstrap-vue';

export default {
  name: "Header",
  components: {
    'b-jumbotron': BJumbotron
  }
}
</script>

<style>
#header {
  text-shadow: 1px 1px 2px black;
  color: #fdc513;
}
#header > h1 {
    font-size: 3rem;
}
#header > p {
    font-size: 2rem;
}
</style>