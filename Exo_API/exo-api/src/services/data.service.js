import axios from "axios";

// const urlapi ="https://pokeapi.co/api/v2/pokemon/pikachu";

const data = [
    {
        id:1,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: false,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },

    {
        id:2,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: false,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },

    {
        id:3,
        firstName: 'toto',
        lastName: 'titi',
        phone: '010101001',
        status: false,
        address : {
            street : 'strreet',
            postCode: '00000',
            city: 'mouvaux'
        }
    },
]

export const getData = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(data)
        console.log("dataPromise", data);
    },3000)
})


// export const getInfoPokeApi = () => {
//     return axios.get(urlapi);
// }


