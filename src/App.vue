<template>
  <div class="">
    <NavBar/>
    <CountriesList/>   
  </div>
</template>

<script>
import CountriesList from './components/CountriesList.vue';
import NavBar from './components/NavBar.vue';
import COUNTRIES from '../public/countries.json';

export default{ 
    components:{
      NavBar,
      CountriesList,    
      },
    data(){
      countries:COUNTRIES;
    },
};
</script>

<style>
</style>