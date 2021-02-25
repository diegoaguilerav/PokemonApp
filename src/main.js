import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import Pokedex from './components/Pokedex.vue'
import Data from './components/Data.vue'
import Ability from './components/Ability.vue'
import Poke2 from './components/Poke2.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/'                 , component: Pokedex},
    { path: '/data/:name'       , component: Data},
    { path: '/ability/:number'  , component: Ability},
    { path: '/poke'             , component: Poke2},
  ],
  mode: "history"
})

const store = new Vuex.Store({
  state: {
    pokemon: [],
    pokemonMega: [],
    next: undefined,
    previous: undefined,
    count: undefined,
    pages: undefined,
    pokemon_data: {
      name: '',
      sprites:{
        
      }
    },
    ability_data: {
      name : ''
    },
    comienzo: 0,
    busqueda: '',
    verMas: true
  },
  mutations: {
      lista_pokemon(state, endpoint){
          axios.get(endpoint)
          .then(respuesta => {
            let pokemon = undefined
            let pokemonList = respuesta.data.results
            state.next = respuesta.data.next
            state.previous = respuesta.data.previous
            state.count = respuesta.data.count
            for (let i = 0; i < pokemonList.length; i++){
                pokemon = pokemonList[i]
                let numArray = pokemonList[i].url.split("/") //SEPARA LA URL POR PARTES /
                pokemon['number'] = numArray[numArray.length - 2] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
                if (pokemon.number < 900){
                    state.pokemon.push(pokemon)
                }else{
                    state.pokemonMega.push(pokemon)
                }    
            }
          })
          state.comienzo = 1
      },
      page_pokemon(state, endpoint){ 
        console.log(endpoint)
        axios.get(endpoint)
        .then(respuesta => {
          state.pokemon = []
          state.pokemonMega = []
          let pokemon = undefined
          let pokemonList = respuesta.data.results
          state.next = respuesta.data.next
          state.previous = respuesta.data.previous
          state.count = respuesta.data.count
          for (let i = 0; i < pokemonList.length; i++){
              pokemon = pokemonList[i]
              let numArray = pokemonList[i].url.split("/") //SEPARA LA URL POR PARTES /
              pokemon['number'] = numArray[numArray.length - 2] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
              if (pokemon.number < 900){
                  state.pokemon.push(pokemon)
              }else{
                  state.pokemonMega.push(pokemon)
              }    
          }
        })
    },
    buscar_pokemon(state, busqueda){
      let setPokemon = []
      state.pokemon = []
      state.busqueda = busqueda.pokemonBuscado
      if(busqueda.pokemonBuscado == ''){
        state.verMas = true
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        .then(respuesta => {
          let pokemonData = respuesta.data.results
          for (let i = 0; i < pokemonData.length; i++) {
            let numArray = pokemonData[i].url.split("/") //SEPARA LA URL POR PARTES /
            pokemonData[i]['number'] = numArray[numArray.length - 2] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
            state.pokemon.push(pokemonData[i])
          }
        })
      }else{
        state.verMas = false
        axios.get(busqueda.endpoint)
        .then(respuesta => {
            let pokemonArray = respuesta.data.results //ARREGLO CON LOS 900 PK
            let nombre = ''
            for (let i = 0; i < pokemonArray.length; i++){
              nombre = ''
              for (let j = 0; j < pokemonArray[i].name.length; j++) {
                nombre += pokemonArray[i].name[j]
                if (busqueda.pokemonBuscado == nombre){
                  let numArray = pokemonArray[i].url.split("/") //SEPARA LA URL POR PARTES /
                  pokemonArray[i]['number'] = numArray[numArray.length - 2] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
                  setPokemon.push(pokemonArray[i]) //ALMACENA LOS POKEMON EN EL ARREGLO PARA SETEARLOS
                }
              }
            }
            state.pokemon = [...new Set(setPokemon)] //SETEA EL ARREGLO PARA QUE NO HAYAN DUPLICADOS
        })
      }
    },
    url_pokemon(state, url){
      axios.get(url)
      .then(respuesta => {
          state.pokemon_data = respuesta.data
      })
    },
    url_ability(state, url){
      axios.get(url)
      .then(respuesta => {
          state.ability_data = respuesta.data
      })
    },
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
