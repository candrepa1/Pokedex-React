import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';

const FilterChosen = ({ name }) => {
    const [info, setInfo] = useState('');
    useEffect(() => {
        setInfo('');
        name.length > 1 ? name.forEach(async (item) => await getPokemon(item.pokemon.name)) : name.forEach(async (element) => await getPokemon(element));
    }, [name])

    const getPokemon = async (name) => {
        const first = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const result = await first.json();
        name.length > 1 ? setInfo((info) => [...info, result]) : setInfo([result]);
    }

    return(
        <>
            {info ? info.map((element, index) => <PokeCard key={index} name={element.name} image={element.sprites.front_default} types={element.types.map((item, index) => <div key={index} className="bg-indigo-400 rounded p-2 mr-4 mb-4"><p className="capitalize text-white">{item.type.name}</p></div>)} hp={element.stats[0].base_stat} attack={element.stats[1].base_stat} defense={element.stats[2].base_stat} speed={element.stats[5].base_stat} />) : null}
        </>
    );
}

export default FilterChosen;