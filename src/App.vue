<template>
 <v-ons-page>
   <app-toolbar>
      <template slot="right">
        <v-ons-button>
          <v-ons-icon icon="md-settings"></v-ons-icon>
        </v-ons-button>
      </template>

      <template slot="left">
        <v-ons-button>
          <v-ons-icon icon="md-settings"></v-ons-icon>
        </v-ons-button>
      </template>
   </app-toolbar>

  <div class="center">
    <app-search :query.sync="query"/>
  </div>
  

 </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppSearch from './components/AppSearch'

export default {

 components: {
   AppToolbar,
   AppSearch,
 },
 data(){
   return{
     query:''
   }
 },

 /*watch:{
   query(newValue){
     console.log(newValue)
   }
 }*/

}
</script>