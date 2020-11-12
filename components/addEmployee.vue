<template>
    <section class="addEmployee">
      <v-transition name="fade" mode="out-in">
        <div v-if="progress" class="addEmployee-adding">

        <span>جاري إضافة المنشور</span>
        <span>{{ dots }}</span>
        </div>
        <div v-else>
          <v-container grid-list-xl>
                  <v-layout wrap>
                      <v-flex xs12 sm9 md10 lg10>
                        <!-- <h2 class="addEmployee-title">المعلومات الأساسية</h2> -->
                        <v-layout wrap>
                          <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                          <v-select 
                          label="الصنف" 
                          style="font-weight:bold " 
                          solo background-color="#fff"
                          v-model="category"
                          item-value="categorie.abbr"
                          single-line
                          persistent-hint
                          return-object
                          item-text="title"
                          @change="setCategorie()"
                          :items="categories"></v-select>
                          </v-flex>
                          <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                          <v-select 
                          label="الولاية" 
                          style="font-weight:bold " 
                          solo background-color="#fff" 
                          v-model="state"
                          item-value="categorie.stateAbbr"
                          single-line
                          persistent-hint
                          return-object
                          item-text="stateName"
                          @change="setState()"
                          :items="states"></v-select>                  </v-flex>
                          <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                          <v-select 
                          label="المقاطعة" 
                          :disabled="disableVlg"
                          style="font-weight:bold " 
                          solo background-color="#fff" 
                          v-model="village"
                          item-value="village.villageAbbr"
                          single-line
                          persistent-hint
                          return-object
                          item-text="villageName"
                          @change="setVillagePlaces()"
                          :items="villages"></v-select>  
                          </v-flex>
                          <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                          <v-select 
                          label="المنطقة" 
                          :disabled="disablePlc"
                          style="font-weight:bold " 
                          solo background-color="#fff" 
                          v-model="place"
                          item-value="place.placeAbbr"
                          single-line
                          persistent-hint
                          return-object
                          item-text="placeName"
                          @change="checkIsReady()"
                          :items="places"></v-select> 
                          </v-flex>
                        <!-- <h2 class="addEmployee-title">المعلومات الشخصية</h2> -->
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-text-field 
                            label="الإسم"
                            style="font-weight:bold" 
                            solo 
                            background-color="#fff"
                            v-model="fullName"
                            @keyup="checkIsReady()"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-text-field 
                        label="رقم الهاتف" 
                        type="number" 
                        style="font-weight:bold " 
                        solo 
                        background-color="#fff"
                        @keyup="checkIsReady()"
                        v-model="phone"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-text-field 
                        label="واتساب" 
                        type="number" 
                        style="font-weight:bold" 
                        solo 
                        background-color="#fff"
                        @keyup="checkIsReady()"
                        v-model="whatsapp"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-text-field
                        label="المؤسسة"
                        style="font-weight:bold"
                        solo background-color="#fff"
                        @keyup="checkIsReady()"
                        v-model="company"></v-text-field>
                        </v-flex>
                        <!-- <h2 class="addEmployee-title">معلومات الإيجار</h2> -->
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-text-field 
                        label="سعر الإيجار" 
                        type="number" 
                        style="font-weight:bold " 
                        solo 
                        @keyup="checkIsReady()"
                        background-color="#fff" 
                        v-model="price"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-select 
                        label="المدة الأدنى لتأجير" 
                        style="font-weight:bold " 
                        solo background-color="#fff" 
                        v-model="lowDuration"
                        item-value="lowDuration.title"
                        single-line
                        persistent-hint
                        return-object
                        item-text="title"
                        @change="checkIsReady()"
                        :items="durations"></v-select>  
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-select 
                        label="المدة الأٌقصى لتأجير" 
                        style="font-weight:bold " 
                        solo background-color="#fff" 
                        v-model="maxDuration"
                        item-value="lowDuration.title"
                        single-line
                        persistent-hint
                        return-object
                        item-text="title"
                        @change="checkIsReady()"
                        :items="durations"></v-select>                  
                        </v-flex>
                        <v-flex xs12 sm4 md4 style="padding-bottom: 0;">
                        <v-select 
                        label="أقل مبلغ لدفع بشكل فوري" 
                        style="font-weight:bold " 
                        solo background-color="#fff" 
                        v-model="lowPrice"
                        item-value="lowDuration.prc"
                        single-line
                        persistent-hint
                        return-object
                        item-text="name"
                        @change="checkIsReady()"
                        :items="lowPrices"></v-select>                     
                        </v-flex>
                        </v-layout> 
                      </v-flex>
                      <v-flex xs12 sm3 md2 lg2>
                        <div class="addEmployee-uploadImages" @click="onChoose()">
                            <v-icon large color="#FFF">fa fa-user</v-icon>
                            <input
                            type="file"
                            id="real-input"
                            ref="realInput"
                            accept="image/x-png,image/gif,image/jpeg"
                            hidden
                            @change="onUpload($event)"
                            />
                            <img :src="file" v-if="prevImage"/>
                        </div>
                      </v-flex>
                  </v-layout>  
                  <div class="addEmployee-btns">  
                    <v-btn color="primary" large :disabled="isReady" @click="addEmployee()">أضف الموظف</v-btn>
                    <v-btn color="grey-color" large  @click="cancel('employeeComp')">إلغاء</v-btn>
                  </div>
          </v-container>
        </div>
      </v-transition>
    </section>
</template>

<script>

export default {
  transition: 'fade',
  data() {
    return {
     file: '',
     prevImage: false,
    }
  },
  methods: {
    setState() {

    },
    setCategorie() {
  
    },
    setVillagePlaces() {

    },
    onChoose() {
      this.$refs.realInput.click()
    },
    onUpload(e) {
        this.file = e.target.files[0]
        this.prevImage = true
        console.log(e.target.files)
    },
    addEmployee() {
     

    },
    checkIsReady() {
   
    },
    dotsInterval() {
      let i = 0
      this.interval = setInterval(() => {
        // if (this.dots.length >= 2) this.dots = ''
        if (i === 5) {
          this.dots = ''
          i = 0
        }
        this.dots = this.dots + '. '
        console.log(this.dots)
        i++
      },500)
    },
    cancel(comp) {
        this.$store.commit('SET_ACTIVE_MAIN_COMP', comp)
        this.$store.commit('SET_MAIN_TITLE', 'إدارة الموظفين')
    }
  },
  computed: {
    states() {
      return null
    },
    categories() {
      return null
    },
    villages() {
      return null
    },
    places() {
      return null
    },
    durations() {
      
      return null
    },
    lowPrices() {
      

      return null
    }
  }
}
</script>
