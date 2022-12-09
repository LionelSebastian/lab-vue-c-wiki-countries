  <template>   
      <h1>Esto es una prueba de reautilizacion de componentes</h1>
      <CountryDetails/>
  </template>
  
  <script>  
  import CountryDetails from '../components/CountryDetails.vue';  
  import COUNTRIES from '../../public/countries.json';

  export default{ 
      computed:{    
        findCountry(){
         return this.countries.find((item)=> item.alpha3Code === this.$route.params.alpha3Code)
    },
  },
  data(){
      return{
        countries:COUNTRIES
      };    
    },
  methods:{
       getAlpha2Code (countrie){
       return (`https://www.geonames.org/flags/x/${countrie.alpha2Code.toLowerCase()}.gif`);
      }
    },
  
  components:{   
      CountryDetails,        
     },
  };
  </script>
    
  <style>
  </style>


  export default {

    
 
