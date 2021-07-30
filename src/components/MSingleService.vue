<template>
  <button @dblclick="showToast(data.id)" class="card px-4 py-3 w-100">
    <div class="d-flex align-items-center">
      <img
        :src="require(`@/assets/imgs/${data.img}`)"
        alt=""
        class="p-3 rounded-circle me-3"
      />
      <div>
        <p class="mb-0 fw-500 text-start" style="font-size: 0.9rem">
          {{ data.title }}
        </p>
        <p class="mb-0 text-start" style="font-size: 0.9rem">
          {{ data.subTitle }}
        </p>
      </div>
    </div>
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MSingleService",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      updateToast: "updateToast",
    }),
    showToast(id) {
      if (id === 3) {
        this.updateToast(true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  border: 1px solid #dceeff;
}

p {
  color: rgba(51, 51, 51, 1);
}
p:nth-child(2) {
  color: rgba(151, 151, 151, 1);
}

img {
  background: rgba(220, 238, 255, 1);
}
</style>
