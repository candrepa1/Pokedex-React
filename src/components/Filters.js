import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FilterChosen from './FilterChosen';

const Filters = () => {
    const {register, handleSubmit, errors} = useForm();
    const [byType, setByType] = useState('');
    const [allTypes, setAllTypes] = useState('');
    const [list, setList] = useState('');

    const onSubmitByType = (data, event) => {
        setByType(data.byType);
    } 

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(response => response.json())
            .then(data => setAllTypes(data.results));
    }, [])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${byType}`)
            .then(response => response.json())
            .then(data => {
                setList(data.pokemon);
            });
    }, [byType])

    const onSubmitByName = (data, event) => {
        if(data.byName.length < 1) {
            return null;
        } else {
            setList([data.byName]);
            event.target.reset();
        }
    }

    return(
        <>
            <h1 className="text-4xl font-bold mb-3 text-center uppercase">Pokedex</h1>
            <p className="text-gray-600 mb-4 text-center">Seach for Pokemons by name or Filter them by type.</p>
            <form onSubmit={handleSubmit(onSubmitByName)} className="flex justify-center">
                <input name="byName" ref={register} placeholder="What Pokemon are you looking for?" className="bg-gray-100 p-3 rounded-lg w-3/4 text-center sm:w-7/12 md:w-2/5 lg:w-1/3"/>
                <button className="w-12"><div className="flex justify-center"><svg className="w-6 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></button>
            </form>
            {errors.byName && <p>{errors.byName.message}</p>}
            <p className="text-center text-gray-600 my-3">OR</p>
            <form onSubmit={handleSubmit(onSubmitByType)} className="flex mb-7 justify-center">
                <select name="byType" ref={register} className="bg-gray-100 p-3 rounded-md w-3/4 text-center capitalize sm:w-7/12 md:w-2/5 lg:w-1/3">
                    <option value="">--Select A Type--</option>
                    {allTypes && allTypes.map((type) => <option key ={type.name} value={type.name}>{type.name}</option>)}
                </select>
                <button className="w-12"><div className="flex justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></button>
            </form>
            {list ? <FilterChosen name={list}/> : null}
        </>
    );
}

export default Filters;