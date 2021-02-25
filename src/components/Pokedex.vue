<template>
  <div id="component">
    <div class="pokedex-component">
        <label>Buscar Pokemon: <input type="text" v-model="store.state.busqueda" v-on:keyup="buscar_pokemon(store.state.busqueda)"></label>
        <div class="pokedex d-flex justify-content-center">
            <div class="pokedex-container" v-for="(p, index) of store.state.pokemon" :key="index">
                    <div><span>N°: {{p.number}}</span></div>
                    <!--ANIMACION LOADER-->
                    <div class="lds-ring">
                      <div></div><div></div><div></div><div></div>
                    </div>
                    <img class="img-pokemon" :src="('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + p.number + '.png')">
                    <div class="pokedex-box d-flex flex-column">
                        <span>{{p.name.substring( 0, 1 ).toUpperCase() + p.name.substring( 1 )}}</span>
                        <router-link :to="`/data/${p.name}`"><span @click="information(p.url)">Más información</span></router-link>
                    </div>
            </div>
        </div>
        <!--ARREGLAR BOTON-->
        <button v-show="store.state.verMas" @click="next(store.state.next)" class="btn">VER MÁS</button>
        <div v-show="store.state.verMas" class="pokedex-paginas">
            <span class="pagina-n">N°</span>
            <div v-for="pagina of store.state.count" :key="pagina.id">
                <span class="pagina" v-if="(pagina % 100 == 0) && (pagina < 900)" @click="page(pagina)">{{pagina}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pokedex',
  data:function(){
    return{
      store: this.$store,
      pokemonListaCompleta: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118',
    }
  },
  methods: {
    next: function(next){
      this.store.commit('lista_pokemon', next)
      this.loader()
    },
    previous: function(previous){
      this.store.commit('lista_pokemon', previous)
    },
    information(url){
      console.log(url)
      /* console.log('url:', url)
      this.store.commit('url_pokemon', url) */
    },
    page: function(page){
      let endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=' + page + '&limit=20'
      this.store.commit('page_pokemon', endpoint)
      //REINICIA LAS IMAGENES
      let cargar = document.getElementsByClassName('img-pokemon')
      let loader = document.getElementsByClassName('lds-ring')
      for (let i = 0; i < cargar.length; i++){
          cargar[i].style.display = 'none'
          loader[i].style.display = 'block'
          loader[i].style.margin = '0 auto'
      }
      this.loader()
    },
    buscar_pokemon: function(b){
        let busqueda = {
          pokemonBuscado: b,
          endpoint: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900'
        }
        this.store.commit('buscar_pokemon', busqueda)
        this.loader()
    },
    loader: function(){
      let interval  = setTimeout(() => {
                        let cargar = document.getElementsByClassName('img-pokemon')
                        let loader = document.getElementsByClassName('lds-ring')
                        for (let i = 0; i < cargar.length; i++){
                          cargar[i].style.display = 'flex'
                          loader[i].style.display = 'none'
                          /* if(i == (cargar.length -1)){
                            clearInterval(interval)
                          } */
                        }
                        clearInterval(interval)
                      }, 2000);
                      
    }
  },
  created: function(){
      if (this.store.state.comienzo == 0){
      let endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      this.store.commit('lista_pokemon', endpoint) 
      }
      this.loader()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokedex-component{
  background-color: #FFF;
  padding: 10px;
  min-height: 1000px;
}
.pokedex{
  display: flex;
  flex-wrap: wrap;
}
.pokedex-container{
  width: 45%;
  min-height: 216px;
  border-radius: 20px;
  border: 2px solid blue;
  background-color: royalblue;
  color: #FFF;
  margin: 5px;
}
.pokedex-box{
  display: flex;
  padding: 10px;
}
.pokedex-box a{
  color: #F5F10C;
}
.pokedex-paginas{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 55%;
  margin: 0 auto;
  border-radius: 30px;
}
.pagina-n, .pagina{
  margin: 0 10px;
  color: royalblue;
  font-weight: bold;
}
.pagina{
  cursor: pointer;
}
.btn{
  margin: 20px 5px;
  background-color: royalblue;
  color: #FFF;
}
.img-pokemon{
  display: none;
  margin: 0 auto;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 1024px){
  .pokedex-component{
    width: 80%;
    margin: 0 auto;
  }
  .pokedex-container{
    width: 15%;
    margin: 10px;
  }
  .pokedex-component{
    border: 10px solid royalblue;
    border-radius: 30px;
    min-height: 1050px;
  }
}
</style>
