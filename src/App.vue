<template>
  <div class="container-fluid">
    <m-navigation />
    <router-view />
  </div>
</template>

<script>
import MNavigation from "@/components/MNavigation";
export default {
  components: {
    MNavigation,
  },
};
</script>

<style lang="scss"></style>
