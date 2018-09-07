<template>
 <v-ons-navigator
    :page-stack="pageStack"
    @push-page="pushPage"
    :options="options">
    </v-ons-navigator>
</template>

<script>

import Main from './containers/Main'
import Profile from './containers/Profile'
  
  export default {
    data(){
      return{
        pageStack:[ Main ],
      }
    },

    methods:{
      pushPage(page){
        this.pageStack.push(page);
      }
    }
  }
</script>