<template>
  <section class="itemCard">
    <v-layout wrap justify-center>
      <v-flex xs6 sm4 md3 v-for="(item, i) in menu" :key="i" @click="handlerComp(item.comp,item.mainTitle)">
        <div class="itemCard-item" :style="{background: item.background, borderColor: item.border}">
            <h2>{{ item.title }}</h2>
            <!-- <img :src="item.icon"/> -->
            <v-icon large color="primary">{{ item.icon }}</v-icon>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "الموظفين",
          mainTitle: 'إدارة الموظفين',
          // icon: require('../assets/SVG/m-employees.png'),
          icon: 'fa fa-users',
          //background: '#92b7c7',
          background: '#F3F3F3',
          border: '#e3e4e4',
          //border: '#abbdc5',
          comp: 'employeeComp'
        },
        {
          title: "الأقسام",
          mainTitle: 'إدارة الأقسام',
          // icon: require('../assets/SVG/department.png'),
          icon : 'fa fa-th',
          // background: '#e8bfcd',
          // border: '#eaafc3',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'departsComp'
        },
        {
          title: "الجدول الزمني",
          mainTitle: 'إدارة الجدول الزمنى',
          // icon: require('../assets/SVG/schedule.png'),
          icon : 'fa fa-calendar-alt',
          // background: '#d3e0c4',
          // border: '#d1e2be',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'timeTableComp'
        }
      ],
    };
  },
  methods: {
      handlerComp(comp,mainTitle) {
          this.$store.commit('SET_ACTIVE_MAIN_COMP', comp)
          this.$store.commit('SET_MAIN_TITLE', mainTitle)
      }
  }
};
</script>