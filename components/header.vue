<template>
    <section class="header">
       <div class="header-toolbar">
         <v-icon small color="primary" @click="goToHome()">fa fa-home</v-icon>
         <!-- <h2>تطبيق إدراة الموارد البشرية CarApp</h2> -->
         <img src="../assets/SVG/carApp.png" />
         <v-icon small color="primary">fa fa-user</v-icon>
       </div>
       <!-- <img src="../assets/SVG/carApp.png" /> -->
    </section>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$store.commit('SET_MAIN_TITLE', 'القائمة الرئيسية')
      this.$store.commit('SET_ACTIVE_MAIN_COMP', 'main-comp')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/abstracts/variables";

.header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    &-toolbar {
      width: 60rem;
      padding: .7rem 2rem;
      background: #FFF;
      margin: 0;
      box-shadow: 1px 1px 4px 1px rgba(#222,0.1) !important;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      border: 2px solid $primary-color;
      border-top: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & img {
        width: 20rem;
      }
      
      & h2 {
        color: #FFF;
      }
    }
    // & img {
    //   width: 30rem;
    //   border-radius: 5px;
    //   border: 2px solid #eb1e79;
    //   margin-top: 5rem;
    // }
}
</style>