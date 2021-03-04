import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ExtraPoke = () => {
    let location = useLocation();

    return(
        <div className="lg:grid lg:grid-cols-2 lg:gap-2">
            <div className="">
                <div className="lg:w-full lg:h-full">
                    <div className="flex bg-red-500 rounded-xl mb-2 lg:w-full lg:h-auto lg:flex-col lg:items-center lg:text-center">
                        <img src={location.props.info.sprites.front_default} alt={location.props.info.name}className="w-2/4"/>
                        <div className="flex flex-col p-5 justify-center">
                            <p className="text-gray-700 font-bold">#{location.props.info.order}</p>
                            <h3 className="text-white font-bold capitalize text-3xl mb-1">{location.props.info.name}</h3>
                            <div className="flex lg:justify-center">
                                {location.props.info.types.map((type, index) => <span key={index} className="bg-yellow-600 rounded px-2 py-1 capitalize text-white mr-2">{type.type.name}</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-2 lg:w-full">
                        <div className="flex w-full lg:flex-col">
                            <div className="bg-yellow-200 p-3 rounded-xl mr-2 px-5 text-center w-2/4 h-full lg:w-full lg:mb-2"> 
                                    <p className="font-bold">Height:</p>
                                    <p className="text-gray-800">{(location.props.info.height / 10).toFixed(1)} m</p>
                                    <p className="font-bold">Weight:</p>
                                    <p className="text-gray-800">{(location.props.info.weight / 10).toFixed(1)} kg</p>
                            </div>
                            <div className="bg-indigo-300 p-3 rounded-xl px-5 w-2/4 mr-2 lg:w-full lg:mb-2">
                                <div className="flex justify-center">
                                    <p className="font-bold mr-1">Hp:</p>
                                    <p className="text-gray-800">{location.props.hp}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="font-bold mr-1">Attack:</p>
                                    <p className="text-gray-800">{location.props.attack}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="font-bold mr-1">Defense:</p>
                                    <p className="text-gray-800">{location.props.defense}</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="font-bold mr-1">Speed:</p>
                                    <p className="text-gray-800">{location.props.speed}</p>
                                </div>
                            </div>
                            <div className="flex bg-blue-200 p-3 px-5 rounded-xl items-center flex-col w-1/3 lg:w-full">
                                <p className="font-bold">Skills</p>
                                <div className="flex flex-col lg:flex-row lg:my-4">
                                    {location.props.info.abilities.map((skill, index) => <span key={index} className="bg-pink-800 py-1 px-2 rounded mx-2 text-white capitalize mb-2">{skill.ability.name}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="flex flex-col bg-gray-400 p-5 rounded-xl lg:w-full">
                <p className="font-bold text-center mb-4">Moves</p>
                <div className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
                    {location.props.info.moves.map((move, index) => <span key={index} className="capitalize text-white bg-green-400 rounded-lg text-center p-1">{move.move.name}</span>)}
                </div>
            </div>
            <div className="flex flex mt-3 justify-between lg:col-span-2">
                <div className="bg-black text-white font-bold rounded-lg p-2 w-20">
                    <Link to="/pokedex" className="flex flex-col items-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    </svg>Back</Link>
                </div>
                <div className="bg-black text-white font-bold rounded-lg p-2 w-20">
                    <Link to={{pathname: `/pokedex/pokemon/${location.props.info.order}/encounters`, encounters: location.props.info.location_area_encounters, name: location.props.info.name}} className="flex flex-col items-center"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                    </svg>Places</Link>
                </div>
            </div>
        </div>
    );
}

export default ExtraPoke;