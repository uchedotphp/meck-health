<template>
  <div id="myModal" class="modal1">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="header">
        <h2 class="text-center fs-6 fw-600">
          Allow “Meck” to access your location while you use the app?
        </h2>
      </div>
      <div class="mx-auto py-2">
        <p class="text-center mb-0" style="font-size: 0.8rem; max-width: 200px">
          Meck helps you get healthcare even in an emergency!
        </p>
      </div>
      <div class="footer border-top d-flex justify-content-between px-3">
        <button class="btn w-50 py-2 fw-500" @click="close">Don't Allow</button>
        <button class="btn w-50 border-start py-2 fw-500" @click="close">
          Allow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MModal",
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal1 {
  //   display: none; /* Hidden by default */
  display: flex;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  border-radius: 15px;
  overflow: hidden;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

.header {
  padding-top: 20px;
  max-width: 200px;
  margin: 0 auto;
}

.footer {
  button {
    color: #0070ff;
  }
}
</style>
