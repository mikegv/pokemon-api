import React from 'react';

const resultStyle = {
    marginTop : '50px',
    textAlign :'center'
}
const Results = ({pokemonData}) => {
    return (
        <div style={resultStyle}>
            <img src={pokemonData.sprites.front_default} style={{transform : 'scale(2)', marginRight: '70px',marginBottom: '40px'}} />
            <img src={pokemonData.sprites.front_shiny} style={{transform : 'scale(2)', marginRight: '70px',marginBottom: '40px'}} />
            <div>
                <p>Abilities: {pokemonData.abilities.map(ability => <p>{ability.ability.name}</p>)}</p>
            </div>
           <div>
            types: {pokemonData.types.map(type => <p>{type.type.name}</p>)}
           </div>
            
        </div>
    );
};

export default Results;