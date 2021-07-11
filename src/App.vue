<template>
  <div>
    <px-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-10 flex justify-center" />
  </div>
</template>

<script>
// @ is an alias to /src
import PxHeader from "@/components/PxHeader";

export default {
  name: "Home",
  components: {
    PxHeader,
  },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "xrp" } },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
