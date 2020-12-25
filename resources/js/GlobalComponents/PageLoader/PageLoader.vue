<template>
  <!-- https://www.npmjs.com/package/vue-element-loading -->
  <vue-loading background-color="rgba(0,0,0,.85)" :active="loadingStatus">
    <img
      class="img-responsive page-loading-img"
      src="images/sitelogo.jpeg"
      width="80px"
      height="auto"
    />
  </vue-loading>
</template>

<script>
export default {
  props: {
    show: Boolean,
    time: Number,
  },
  data() {
    return {
      loadingStatus: this.show,
    };
  },
  beforeMount() {},
  created() {
    setTimeout(() => {
      this.loadingStatus = false;
    }, this.time);
  },
};
</script>

<style>
.velmld-spinner {
  transform: none !important;
}
.page-loading-img {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 11111111;
}
</style>