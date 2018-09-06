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

    <!--<div v-for="repo in repos" :key="repo.id">
      {{ repo }}
    </div>-->
  </div>
  

 </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppSearch from './components/AppSearch'
import { gitService } from './services/GitHub'

export default {

 components: {
   AppToolbar,
   AppSearch,
 },
 data(){
   return{
     query:'',
     repos:[]
   }
 },

  created(){
    gitService.getRepos()
    .then(response => (this.repos = response.data))
    .catch(err =>console.log(err))
  },
 

  watch:{
   query(newValue){
     console.log(newValue)
   }
 }

}
</script>