<template>
  <section class="itemCard">
    <v-layout wrap justify-center>
      <v-flex xs6 sm4 md3 v-for="(item, i) in menu" :key="i" @click="handlerComp(item.comp)">
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
          title: "جدول الإدارة",
          // icon: require('../assets/SVG/add.png'),
          // background: '#d3e0c4',
          // border: '#d1e2be',
          icon : 'fa fa-table',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: ''
        },
        {
          title: 'جدول خدمة الزبناء',
          // icon: require('../assets/SVG/employee.png'),
          // background: '#d3e0c4',
          // border: '#d1e2be',
          icon : 'fa fa-calendar-alt',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: ''
        },
        {
          title: "الرجوع",
          // icon: require('../assets/SVG/previous.png'),
          // background: '#b3b2b2',
          // border: '#b3b2b2',
          icon : 'fa fa-chevron-left',
          background: '#F3F3F3',
          border: '#e3e4e4',
          comp: 'main-comp'
        }
      ],
    };
  },
  methods: {
      handlerComp(comp) {
        if (comp === 'main-comp') this.$store.commit('SET_MAIN_TITLE', 'القائمة الرئيسية')
        this.$store.commit('SET_ACTIVE_MAIN_COMP', comp)
      }
  }
};
</script>