<template>
  <div id="component">
    <div class="d-flex">
        <router-link to="/"><button class="btn btn-back my-2 mx-1">Volver</button></router-link>
    </div>
    <div class="datos-pokemon">
        <div class="datos">
            <div class="datos-nombre">
                <span>Name</span>
            </div>
            <div class="datos-informacion">
                <span>{{uppercase(store.state.pokemon_data.name)}}</span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Type</span>
            </div>
            <div class="datos-informacion">
                <span class="nombre-videojuego" v-for="tipo of store.state.pokemon_data.types" :key="tipo.key">
                    <a href="{tipo.type.url}">{{uppercase(tipo.type.name)}}</a>
                </span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>N° Pokedex</span>
            </div>
            <div class="datos-informacion">
                <span>{{store.state.pokemon_data.order}}</span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Height</span>
            </div>
            <div class="datos-informacion">
                <span>{{store.state.pokemon_data.height / 10}} m</span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Weight</span>
            </div>
            <div class="datos-informacion">
                <span>{{store.state.pokemon_data.weight / 10}} kg</span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Abilities</span>
            </div>
            <div>
                <div class="nombre-habilidad" v-for="habilidad of store.state.pokemon_data.abilities" :key="habilidad.key">
                    <router-link :to="`/ability/${habilidad.ability.name}`"><span>{{uppercase(habilidad.ability.name)}}</span></router-link>
                </div>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Base Experience</span>
            </div>
            <div class="datos-informacion">
                <span>{{store.state.pokemon_data.base_experience}}</span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Videogames</span>
            </div>
            <div class="datos-informacion">
                <span class="nombre-videojuego" v-for="indice of store.state.pokemon_data.game_indices" :key="indice.key">
                    {{uppercase(indice.version.name)}}
                </span>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Sprites</span>
            </div>
            <div class="datos-informacion">
                <div>
                    <img :src="store.state.pokemon_data.sprites.front_default" alt="">
                    <img :src="store.state.pokemon_data.sprites.front_female" alt="">
                    <img :src="store.state.pokemon_data.sprites.front_shiny" alt="">
                    <img :src="store.state.pokemon_data.sprites.front_shiny_female" alt="">
                </div>
                <div>
                    <img :src="store.state.pokemon_data.sprites.back_default" alt="">
                    <img :src="store.state.pokemon_data.sprites.back_female" alt="">
                    <img :src="store.state.pokemon_data.sprites.back_shiny" alt="">
                    <img :src="store.state.pokemon_data.sprites.back_shiny_female" alt="">
                </div>
            </div>
        </div>
        <div class="datos">
            <div class="datos-nombre">
                <span>Stats Base</span>
            </div>
            <div class="datos-informacion">
                <span class="nombre-videojuego" v-for="estadistica of store.state.pokemon_data.stats" :key="estadistica.key">
                    {{uppercase(estadistica.stat.name)}} {{estadistica.base_stat}}
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Data',
  data:function(){
    return{
      store: this.$store
    }
  },
  created: function(){
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    let urlActual = window.location
    let numArray = urlActual.href.split("/") //SEPARA LA URL POR PARTES /
    url += numArray[numArray.length - 1] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
    this.store.commit('url_pokemon', url)
  },
  methods: {
      uppercase:function(name){
          return name.substring( 0, 1 ).toUpperCase() + name.substring( 1 )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#component{
    width: 100%;
    margin: 0 auto;
}
.btn-back{
    color: #fff;
    background-color: royalblue;
    border-color: #007bff;
}
.datos-pokemon{
    background-color: royalblue;
    border: 1px solid #FFF;
    color: #FFF;
    border-radius: 20px;
    padding: 30px 0;
}
.datos{
    display: flex;
}
.datos-nombre{
    width: 30%;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    border-right: 1px solid #FFF;
}
.datos-informacion{
    width: 70%;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
}
.nombre-habilidad{
    text-align: left;
    padding-left: 10px;
}
.nombre-habilidad a, .nombre-videojuego a{
    color: #F5F10C;
}
.nombre-videojuego{
    padding-right: 10px;;
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



#contenedor_carga{
  background-color: rgba(250, 240, 245, 0.9);
  height: 100%;
  width: 100%;
  position: fixed;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 10000;
}
#carga{
  border: 15px solid color #ccc;
  border-top-color: #F4266A;
  border-top-style: groove;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -webkit-animation: girar 1.5s linear infinite;
  -o-animation: girar 1.5s linear infinite;
  animation: girar 1.5s linear infinite;
}
@keyframes girar {
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
}
</style>
