<template>
  <div style="height: calc(100vh - 75px)">
    <m-summary />
    <m-services />
    <m-toast />
    <!-- <m-modal /> -->
  </div>
</template>

<script>
import MSummary from "@/components/MSummary";
import MServices from "@/components/MServices";
import MToast from "@/components/MToast.vue";
// import MModal from "@/components/MModal";
export default {
  name: "Home",
  components: {
    MSummary,
    MServices,
    MToast,
    // MModal,
  },
};
</script>
