import React from 'react';
import { Link } from 'react-router-dom';

const PokeCard = ({ info }) => {
    const hp = info.stats.find(stat => stat.stat.name === 'hp').base_stat; 
    const attack = info.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = info.stats.find(stat => stat.stat.name === 'defense').base_stat;
    const speed = info.stats.find(stat => stat.stat.name === 'speed').base_stat;
    return(
        <div className="bg-yellow-600 rounded-lg p-4">
            <div className="text-center mb-4">
                <Link to={{pathname: `/pokedex/pokemon/${info.order}`, props: {info, hp, attack, defense, speed}}} className="text-white font-bold uppercase text-3xl">{info.name}</Link>
            </div>
            <div className="flex">
                <div className="flex flex-col w-2/4">
                    <div className="flex flex-col px-4">{info.types.map((type, index) => <span key={index} className="bg-red-500 rounded px-1 py-1 capitalize text-white text-center mb-2">{type.type.name}</span>)}</div>
                    <div className="flex flex-col justify-center mx-5">
                        <label htmlFor="hp" className="text-center font-bold">HP: {hp}</label>
                        <progress id="hp" value={hp} max="100" className="h-1 mb-3">{hp}%</progress>
                        <label htmlFor="attack" className="text-center font-bold">Attack: {attack}</label>
                        <progress id="attack" value={attack} max="100" className="h-1 mb-3">{attack}%</progress>
                        <label htmlFor="defense" className="text-center font-bold">Defense: {defense}</label>
                        <progress id="defense" value={defense} max="100" className="h-1 mb-3">{defense}%</progress>
                        <label htmlFor="speed" className="text-center font-bold">Speed: {speed}</label>
                        <progress id="speed" value={speed} max="100" className="h-1 mb-3">{speed}%</progress>
                    </div>
                </div>
                <div className="flex justify-center w-2/4">
                    <img src={info.sprites.front_default} alt={info.name} className="w-48 h-48"/>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;