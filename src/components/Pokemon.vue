<template>
  <div v-for="(pokemon, index) in allPokemons" :key="index">
    {{ pokemon.name }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Pokemon",
  computed: mapGetters(["allPokemons"]),
  methods: {
    ...mapActions(["getPokemons", "getEachPokemon"]),
  },
  created() {
    this.getPokemons().then(console.log(this.allPokemons));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
