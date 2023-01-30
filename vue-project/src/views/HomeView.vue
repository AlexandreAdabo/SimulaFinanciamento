<template>
  <headerPage></headerPage>
  <div class="component">
    <SimulaFinanciamento />
  </div>
  <footerPage></footerPage>
</template>
<script>
import SimulaFinanciamento from "../components/SimulaFinanciamento.vue";
import headerPage from "../components/HeaderPage.vue";
import footerPage from "../components/FooterPage.vue";
export default {
  components: {
    SimulaFinanciamento,
    headerPage,
    footerPage
  },
  async created() {},
};
</script>
<style>
@import "../../App.scss";
* {
  font-family: Roboto;
}
</style>
