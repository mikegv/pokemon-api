import { useState } from 'react';

const useRequest = () => {
    const [pokemonData, setPokemonData] = useState({})
    const fetchData = (param) => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + param
       try{fetch(url)
       .then( result => {
            if(!result.ok){throw new Error('There was a problem')}
            console.log('noerror')
            return result.json() 
        })
       .then(data => setPokemonData(data))
    }catch(e){console.log(e.message)}
    }
    return (
        {
            fetchData,
            pokemonData
        }
    );
};

export default useRequest;