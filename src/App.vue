<template>
 <v-ons-page>
   <app-toolbar>
      <template slot="right">
        <v-ons-button>
          <v-ons-icon icon="md-settings"></v-ons-icon>
        </v-ons-button>
      </template>
   </app-toolbar>

  <div class="center">
    <app-search :query.sync="query"/>

   <v-ons-list-header>Repositories of {{ query }}</v-ons-list-header>
    
    <v-ons-list  v-for="repo in repos" :key="repo.id">
      <div class="left">
          <img :src="repo.owner.avatar_url" alt="Image" style="width:50px; height:50px">
        </div>
        
        <div class="right">
          <v-ons-list-item >{{ repo.name }} {{ repo.description }}</v-ons-list-item>
        </div>
      </v-ons-list>
  </div>
  

 </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppSearch from './components/AppSearch'
import { gitService } from './services/GitHub'

import debounce from 'lodash/debounce'

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

 /* created(){
    gitService.getRepos()
    .then(response => (this.repos = response.data))
    .catch(err =>console.log(err))
  },*/
 

  /*watch:{
   query(newValue){
     console.log(newValue)
   }
 }*/

 watch:{
   query: debounce(function(newValue){
     gitService.getRepos(newValue)
     .then((response) => {
       this.repos = response.data
       console.log(this.repos)
     })
   }, 1000)

 }

}
</script>