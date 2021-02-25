<template>
  <div id="component">
        <div class="datos-habilidad">
            <div class="contenedor">
                <div class="name-ability">
                    <span>{{uppercase(store.state.ability_data.name)}}: </span>
                </div>
                <div v-for="ability of store.state.ability_data.effect_entries" :key="ability.key">
                    <span v-if="(ability.language.name == 'en')">{{ability.effect}}</span>
                </div>
            </div>
            <hr>
            <div class="contenedor" v-for="entries of store.state.ability_data.flavor_text_entries" :key="entries.key">
                <div class="name-ability">
                    <span v-if="entries.language.name == 'en'">{{uppercase(entries.version_group.name)}}: </span>
                </div>
                <div class="effect">
                    <span  v-if="entries.language.name == 'en'">{{entries.flavor_text}}</span>
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
    let url = 'https://pokeapi.co/api/v2/ability/'
    let urlActual = window.location
    let numArray = urlActual.href.split("/") //SEPARA LA URL POR PARTES /
    url += numArray[numArray.length - 1] //AGREGA EL NUMERO DEL POKEMON AL OBJETO
    this.store.commit('url_ability', url)
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
.datos-habilidad{
    background-color: royalblue;
    border: 1px solid #FFF;
    color: #FFF;
    border-radius: 20px;
    padding: 30px 5px;
    width: 90%;
    margin: 0 auto;
}
.contenedor{
    display: flex;
    flex-wrap: nowrap;
    text-align: left;
}
.name-ability{
    width: 20%;
    min-width: 180px;
    padding: 0 10px;
}
.effect{
    width: 80%;
    text-align: left;
}
</style>
