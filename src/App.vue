<template>
  <div class="container-fluid py-4 px-3">
    <m-header />
    <m-navigation />
    <router-view />
    <m-modal v-if="firstTimeVisit" @close="firstTimeVisit = false" />
  </div>
</template>

<script>
import MNavigation from "@/components/MNavigation";
import MHeader from "@/components/MHeader";
import MModal from "./components/MModal";
export default {
  data() {
    return {
      firstTimeVisit: false,
    };
  },
  mounted() {
    const getTime = localStorage.getItem("firstVisit");
    if (!getTime) {
      setTimeout(() => {
        this.firstTimeVisit = true;
        localStorage.setItem("firstVisit", Date.now());
      }, 2000);
    }
  },
  components: {
    MNavigation,
    MHeader,
    MModal,
  },
};
</script>

<style lang="scss"></style>
