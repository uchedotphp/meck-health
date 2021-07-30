<template>
  <div class="pt-2">
    <h2 class="text-center fs-6 fw-light">Today</h2>
    <div class="d-flex justify-content-center my-3">
      <m-progress-data v-for="n in data" :key="n.id" :data="n" />
    </div>
    <div class="d-flex justify-content-center my-3">
      <button class="btn d-flex align-items-center">
        More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-a</title>
          <polyline
            points="184 112 328 256 184 400"
            style="
              fill: none;
              stroke: #000;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 48px;
            "
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import MProgressData from "@/components/MProgressData";
export default {
  name: "MSummary",
  data() {
    return {
      data: [
        {
          id: 1,
          count: "213",
          height: "56px",
          width: "56px",
          progress: "70",
          subTitle: "cals",
          img: "calories.svg",
        },
        {
          id: 2,
          count: "5,022",
          height: "65px",
          width: "65px",
          progress: "110",
          subTitle: "steps",
          img: "steps.svg",
        },
        {
          id: 3,
          count: "4Hr55",
          height: "56px",
          width: "56px",
          progress: "120",
          subTitle: "minutes",
          img: "moon.svg",
        },
      ],
    };
  },
  components: {
    MProgressData,
  },
};
</script>

<style lang="scss" scoped></style>
