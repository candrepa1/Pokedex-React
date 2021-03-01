import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FilterChosen from './FilterChosen';

const Filters = () => {
    const {register, handleSubmit} = useForm();
    const [byType, setByType] = useState('');
    const [allTypes, setAllTypes] = useState('');
    const [list, setList] = useState('');

    const onSubmitByType = (data, event) => {
        console.log(data);
        setByType(data.byType);
        event.target.reset();
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
        console.log(data);
        setList([data.byName]);
        event.target.reset();
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmitByName)} className="flex">
                <input name="byName" ref={register} placeholder="What Pokemon are you looking for?" className="bg-gray-100 p-3 rounded-lg w-4/5 text-center"/>
                <button className="w-1/5"><div className="flex justify-center"><svg className="w-6 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></button>
            </form>
            <p className="w-3/4 text-center text-gray-600 my-3">OR</p>
            <form onSubmit={handleSubmit(onSubmitByType)} className="flex">
                <select name="byType" ref={register} className="bg-gray-100 p-3 rounded-md w-4/5 text-center capitalize">
                    <option value="">--Select A Type--</option>
                    {allTypes && allTypes.map((type) => <option key ={type.name} value={type.name}>{type.name}</option>)}
                </select>
                <button className="w-1/5"><div className="flex justify-center"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div></button>
            </form>
            {list ? <FilterChosen name={list}/> : null}
        </>
    );
}

export default Filters;