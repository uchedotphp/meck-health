<template>
  <div>
    <span class="fw-500"> Services </span>
    <div v-for="d in data" :key="d.id">
      <m-single-service class="my-3" :data="d" />
    </div>
  </div>
</template>

<script>
import MSingleService from "@/components/MSingleService";
export default {
  name: "MServices",
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Get checked",
          subTitle: "Take virtual assessment",
          img: "map.svg",
        },
        {
          id: 2,
          title: "See a Doctor",
          subTitle: "Book an appointment",
          img: "briefcase.svg",
        },
        {
          id: 3,
          title: "Report Emergency",
          subTitle: "Tap twice to alert the hospital",
          img: "car-sport.svg",
        },
      ],
    };
  },
  components: {
    MSingleService,
  },
};
</script>

<style lang="scss" scoped></style>
