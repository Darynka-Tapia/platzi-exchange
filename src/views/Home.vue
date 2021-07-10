<template>
  <div class="home">
    <!--https://github.com/greyby/vue-spinner-->
    <ring-loader
      class="snipper"
      :loading="isLoading"
      :color="'#68d391'"
      :size="'50px'"
    ></ring-loader>

    <PxAssetsTable :assets="assets" v-if="!isLoading" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api/";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  name: "Home",
  components: {
    PxAssetsTable,
    RingLoader,
  },
  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => {
        this.assets = assets;
      })
      .finally(() => (this.isLoading = false));
  },
};
</script>

<style scoped></style>
