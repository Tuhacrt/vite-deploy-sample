<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script lang="ts">
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    const url: string = import.meta.env.VITE_PATH;
    console.log(import.meta.env.VITE_TEXT);
    this.$http.get(url).then((res) => {
      console.log(res);
      this.data = res.data.results[0];
      console.log(this.data);
    });
  },
};
</script>
