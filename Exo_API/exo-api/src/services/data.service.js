import axios from "axios";

const urlapi ="https://pokeapi.co/api/v2/pokemon/pikachu";

export const getInfoPokeApi = () => {
    return axios.get(urlapi);
}


