<template>
  <RouterLink to= "/details/${findCountry}">Este link llevaria al country profile</RouterLink>    
     <div class="container">
        <!-- Bootstrap row wrapper div -->
        <div class="row">
          <!-- Countries List (Bootstrap column) -->
          <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
              <a v-for="countrie of countries" class="list-group-item list-group-item-action" :href="countrie.alpha3Code">
                <img :src="getAlpha2Code(countrie)" />
              </a>
            </div> 
          </div>
          <RouterView/>         
        </div>
      </div>
</template>
  
<script>
  import CountryDetails from './CountryDetails.vue';
  import details from '../pages/details.vue'
  import COUNTRIES from '../../public/countries.json';

  export default{ 
      components:{     
         CountryDetails,
         details,
      },
      computed:{  
        findCountry(){
        return this.countries.find((item)=> item.alpha3Code === this.$route.params.alpha3Code)
        },
      },
      
      methods:{
        getAlpha2Code (countrie){
          return (`https://www.geonames.org/flags/x/${countrie.alpha2Code.toLowerCase()}.gif`);
        }

      },
      data(){
        return{
          countries:COUNTRIES
        };
      },
   };
</script>
<style>
img{
  width :100px;
}
</style>