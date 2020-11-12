<template>
  <main>
    <h1>{{ title }}</h1>
  </main>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$store.getters.getMainTitle
        }
    }
}
</script>
<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 4rem;
  transition: all .3s ease-in-out;

  & h1 {
    background: #eb1e79;
    color: #fff;
    padding: 1rem 4rem;
    border-radius: 5px;
    font-size: 1.5rem;
    transition: all .3s ease-in-out;
  }
}
</style>