import { createStore } from "vuex";
import pokemons from "./modules/pokemons";

export default createStore({
  modules: { pokemons },
});
