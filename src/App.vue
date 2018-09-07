<template>
 <v-ons-navigator
    :page-stack="pageStack"
    @push-page="pushPage">
    </v-ons-navigator>
</template>

<script>

import Main from './containers/Main'
  
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