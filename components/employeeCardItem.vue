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
          title: "إضافة موظف",
          mainTitle: 'إضافة موظف جديد',
          // icon: require('../assets/SVG/add.png'),
          icon : 'fa fa-user-plus',
          // background: '#92b7c7',
          // border: '#abbdc5',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'add-employee-comp'
        },
        {
          title: "قائمة الموظفين",
          mainTitle: 'تصفح قائمة الموظفين',
          // icon: require('../assets/SVG/employee.png'),
          icon : 'fa fa-users',
          // background: '#92b7c7',
          // border: '#abbdc5',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'employee-list-comp'
        },
        {
          title: "الرجوع",
          // icon: require('../assets/SVG/previous.png'),
          icon : 'fa fa-chevron-left',
          // background: '#b3b2b2',
          // border: '#b3b2b2',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'main-comp'
        }
      ],
    };
  },
  methods: {
      handlerComp(comp,mainTitle) {
          if (comp === 'main-comp') this.$store.commit('SET_MAIN_TITLE', 'القائمة الرئيسية')
          else this.$store.commit('SET_MAIN_TITLE', mainTitle)
          this.$store.commit('SET_ACTIVE_MAIN_COMP', comp)
      }
  }
};
</script>