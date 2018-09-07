<template>
 <v-ons-page>
   <app-toolbar>
      <template slot="right">
        <v-ons-button>
          <v-ons-icon icon="md-settings"></v-ons-icon>
        </v-ons-button>
      </template>
   </app-toolbar>
  </v-ons-page>
</template>

<script>

import AppToolbar from '../components/AppToolbar'
import { gitService } from '../services/GitHub'


export default {

 components: {
   AppToolbar
 },
 data(){
   return{
     repo:[],
   }
 },
}
</script>