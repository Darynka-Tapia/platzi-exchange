<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="md:flex  items-center justify-between flex-wrap p-6 container-nav">
        <div class="md:flex items-center flex-shrink-0 text-white mr-6">
          
          <router-link class="
            font-semibold 
            text-xl tracking-tight 
            flex 
            md:justify-center	justify-between" 
            style="align-items: flex-end; justify-content: center;" to="/"
            ><px-icon class="mr-2" />PlatziExchange 
              <span @click="showMenu=!showMenu" class="md:hidden block"> 
              <img class="img-menu" src="@/assets/lista.png" alt=""> 
              </span>
          </router-link>
          
          <router-link 
            @click="change()"
            v-for="l in links"
            :key="l.title"
            :to="l.to"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-teal-200
              hover:text-white
              ml-4
              mr-4
              md:block  
            "
            :class="{block: showMenu, hidden: !showMenu}"
            >{{ l.title }}</router-link
          >

          <router-link
            to="/about"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-teal-200
              hover:text-white
              ml-4
              mr-4
              md:block hidden  
            "
            >About</router-link
          >
        </div>
        
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",
  components: {
    PxIcon,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      path:window.location.origin, 
      showMenu:false


    }
  },
  
  methods: {
    change() {
      this.$emit("updateData");
    },
    
    
  },
};
</script>

<style>
.container-nav{
  background:#6D28D9;
}
.container-nav a{
  color:#fff !important;
}
.img-menu{
    width: 30px;
    height: 30px;
    object-fit: contain;
    color: #fff;
}

</style>
