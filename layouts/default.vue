<template>
  <v-app light>
   <app-header/>  
   <nuxt />
   <!-- <app-footer/> -->
  </v-app>
</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'

export default {
  components: {
    AppHeader: header,
    AppFooter: footer
  }
}
</script>
