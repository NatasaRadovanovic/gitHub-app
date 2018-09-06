<template>
 <v-ons-page>
   <app-toolbar />

   <div class="center">
     <app-search />
   </div>

 </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar'

export default {

 components: {
   AppToolbar,
 }

}
</script>