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

    <empty-state v-if="repos.length <= 0" type='Repository'/>

  <v-ons-list>
      <v-ons-list-header>Repositories of {{ query }}</v-ons-list-header>
       <p>
        <v-ons-progress-circular indeterminate v-if="loading"></v-ons-progress-circular>
      </p>
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
import EmptyState from './components/EmptyState'

import debounce from 'lodash/debounce'

export default {

 components: {
   AppToolbar,
   AppSearch,
   EmptyState,
 },
 data(){
   return{
     query:'',
     repos:[],
     loading:false,

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
     this.loading = true
     gitService.getRepos(newValue)
     .then((response) => {
        this.repos = response.data
        console.log(this.repos)
    }).catch(error => {console.log(error)})
     .finally(() => {
       this.loading = false
     })
   }, 1000)

 }

}
</script>