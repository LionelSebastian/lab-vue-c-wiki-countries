<template>
  <!-- Country Details (Bootstrap column) -->
  <div class="col-7">
            <p>{{this.findCountry.name.common}}</p>
            <img :src="getAlpha2Code(findCountry)" alt="country flag" style="width: 100px"/>
            <h1>{{this.findCountry.name.official}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{this.findCountry.capital.toString()}}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{this.findCountry.area}} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li v-if="this.findCountry.borders.length != 0"><a v-for="country in borders" href="/AND">Andorra</a></li>
                      <!-- <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li> -->
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>
  
<script>
import COUNTRIES from '../../public/countries.json';

export default {
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

computed:{  
  findCountry(){
    return this.countries.find((item)=> item.alpha3Code === this.$route.params.alpha3Code)
  },
},
// mounted :{
//   findCountry
// }
};

</script>
  
<style>
</style>