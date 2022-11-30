import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/axios";

const getPokemonData = async () => {
  try {
    const response = axios.get(API_URLS.pokemonData);
  } catch (e) {
    console.log(e);
  }
};

export default getPokemonData;
