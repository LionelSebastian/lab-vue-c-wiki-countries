<template>
  <div class="">
    <NavBar/>
    <header class ="text-center" >
    
    </header>
    <RouterView />
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
      return {
        countries:COUNTRIES
      };
    },
};
</script>

<style>
</style>