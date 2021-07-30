<template>
  <div
    v-if="showToast"
    class="position-fixed end-0 px-3 w-100"
    style="z-index: 11; bottom: 6rem"
  >
    <div
      style="border-left: 5px solid #28df99 !important"
      class="align-items-center border shadow bg-white"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex align-items-center">
        <svg
          class="ms-2"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-e</title>
          <path
            fill="#28df99"
            d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM364.25,186.29l-134.4,160a16,16,0,0,1-12,5.71h-.27a16,16,0,0,1-11.89-5.3l-57.6-64a16,16,0,1,1,23.78-21.4l45.29,50.32L339.75,165.71a16,16,0,0,1,24.5,20.58Z"
          />
        </svg>
        <div class="toast-body">
          <small class="fw-bolder"> Help is on the way! </small>
          <p class="mb-0" style="font-size: 0.8rem">
            The hospital &amp; your next of kin has been notified.
          </p>
        </div>
        <button
          @click="close"
          style="width: 0.4rem; height: 0.4rem"
          type="button"
          class="btn-close m-auto me-2"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MToast",
  computed: {
    ...mapGetters({
      showToast: "toastStatus",
    }),
  },
  methods: {
    ...mapActions({
      closeToast: "updateToast",
    }),
    close() {
      this.closeToast(false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
