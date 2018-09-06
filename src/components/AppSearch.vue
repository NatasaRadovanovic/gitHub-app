<template>
  <v-ons-input 
    :placeholder='placeholder'
    :value="query"
    @input="$emit('update:query', $event.target.value)"></v-ons-input>
</template>

<script>
export default {
   props: {
      query:String,
      placeholder:{
          type:String,
          default: 'Search for something...'
      }
   }

}
</script>