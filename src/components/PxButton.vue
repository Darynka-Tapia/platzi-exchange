<template>
  <button
    @click="buttonClick"
    class="
      bg-transparent
      hover:bg-purple-500
      text-purple-700
      font-semibold
      hover:text-white
      py-2
      px-2
      border border-purple-500
      hover:border-transparent
      rounded
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  methods: {
    buttonClick() {
      this.$emit("click");
    },
  },
};
</script>
