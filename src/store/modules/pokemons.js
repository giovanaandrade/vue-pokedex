import axios from "axios";

const url_base = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

const state = {
  pokemons: {},
  myPokemons: {},
};

const getters = {
  allPokemons: (state) => state.pokemons,
  allMyPokemons: (state) => state.myPokemons,
};

const actions = {
  async getPokemons({ commit }) {
    await axios.get(url_base).then((res) => {
      commit("setAllPokemons", res.data.results);

      // eslint-disable-next-line no-undef
      // pokemons.forEach((pokemon) => getEachPokemon(pokemon));
    });
  },

  //helpppppppp https://next.vuex.vuejs.org/guide/actions.html#dispatching-actions
  async getEachPokemon({ pokemons }) {
    await pokemons.forEach((pokemon) =>
      axios.get(pokemon.url).then((res) => {
        res.data
          .forEach((element) => {
            console.log(element);
          })
          .catch((err) => console.log(err));
      })
    );
  },
};

const mutations = {
  setAllPokemons: (state, pokemons) => (state.pokemons = pokemons),
  setAllMyPokemons: (state, myPokemons) => (state.myPokemons = myPokemons),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
