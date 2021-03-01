import React from 'react';

const PokeCard = ({ name, image, types, hp, attack, defense, speed }) => {
    return(
        <div className="bg-yellow-600 rounded-lg p-4 my-5">
            <p className="uppercase text-white font-bold text-3xl text-center mb-4">{name}</p>
            <div className="flex">
                <div className="flex flex-col w-2/4">
                    <div className="flex justify-center">{types}</div>
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
                    <img src={image} alt={name} className="w-48 h-48"/>
                </div>
            </div>
        </div>
    );
}

export default PokeCard;