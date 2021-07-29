<template>
  <div class="fixed-bottom px-5">
    <nav class="row text-uppercase">
      <router-link
        :to="{ name: 'Home' }"
        exact-active-class="active"
        href="#"
        class="col d-flex flex-column align-items-center"
      >
        <img src="../assets/imgs/home.svg" class="mb-1" alt="" />
        <span class="">home</span>
      </router-link>
      <router-link
        to="#"
        exact-active-class="active"
        class="col d-flex flex-column align-items-center"
      >
        <img src="../assets/imgs/track.svg" class="mb-1" alt="" />
        <span class="">track</span>
      </router-link>
      <router-link
        to="#"
        exact-active-class="active"
        class="col d-flex flex-column align-items-center"
      >
        <img
          class="rounded-circle mb-1"
          src="../assets/imgs/queenicon1.svg"
          alt=""
        />
        <span class="">account</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MNavigation",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 0.5rem;
  margin: 0 1.8rem;
  color: rgba(152, 152, 152, 0.35);
}

.active {
  border-top: 4px solid #0070ff;
  color: #0070ff;
}

.col {
  padding: 1.2rem 0;
}
</style>
