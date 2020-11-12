<template>
  <section class="homePage">
    <v-container grid-list-xl>
      <main-title />
      <div class="homePage-content">
          <keep-alive>
            <transition name="list" mode="out-in">
              <component v-bind:is="getActiveComp"></component>
            </transition>
          </keep-alive>
      </div>
    </v-container>
  </section>
</template>

<script>

import mainTitle from '@/components/mainTitle.vue'
import mainComp from '@/components/menuCardItem.vue'
import employeeComp from '@/components/employeeCardItem.vue'
import departsComp from '@/components/departsCardItem.vue'
import timeTableComp from '@/components/timeTableItemCard.vue'
import addEmployeeComp from '@/components/addEmployee.vue'

export default {
  components: {
    mainTitle,
    mainComp,
    employeeComp,
    departsComp,
    timeTableComp,
    addEmployeeComp
  },
  computed: {
    getActiveComp() {
      return this.$store.getters.getActiveComp
    }
  }
}
</script>

<style lang="scss" scoped>
.homePage {
}

.homePage-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
