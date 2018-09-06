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

   <v-ons-list>
      <v-ons-list-header>Repositories of {{ query }}</v-ons-list-header>
        <v-ons-list-item v-for="repo in repos" :key="repo.id" >

    <div class="left">
          <img class="list-item__thumbnail" :src="repo.owner.avatar_url">
        </div>
        <div class="center">
          <span class="list-item__title">{{ repo.name }}</span><span class="list-item__subtitle">{{ repo.description }}</span>
        </div>
       </v-ons-list-item>
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