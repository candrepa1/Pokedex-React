import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';

const FilterChosen = ({ name }) => {
    const [info, setInfo] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const [pageNumber, setPageNumber] = useState(1);
    const [allPages, setAllPages] = useState([]);
    const [startPages, setStartPages] = useState(0);
    const [endPages, setEndPages] = useState(10);
    
    useEffect(() => {
        setInfo('');
        setStart(0);
        setEnd(4);
        setPageNumber(1);
        setStartPages(0);
        setEndPages(10);
        name.length > 1 ? name.forEach(async (item) => await getPokemon(item.pokemon.name)) : name.forEach(async (element) => await getPokemon(element));
    }, [name])

    useEffect(() => {
        const allPagesNeeded = Array.from(Array(Math.ceil(info.length / 4)), (x, index) => index + 1)
        setAllPages(allPagesNeeded);
    }, [info])

    const getPokemon = async (name) => {
        const first = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const result = await first.json();
        name.length > 1 ? setInfo((info) => [...info, result]) : setInfo([result]);
    }

    const handleNextClick = () => {
        setStart(start => start + 4);
        setEnd(end => end + 4);
        setPageNumber(pageNumber => pageNumber + 1);
        const moveNum = Math.ceil((endPages + startPages)/2);
        if(endPages === allPages.length) {
            return null;
        } else if(pageNumber === moveNum) {
            setStartPages(startPages => startPages + 1);
            setEndPages(endPages => endPages + 1);
        }
    }

    const handlePreviousClick = () => {
        setStart(start => start - 4);
        setEnd(end => end - 4);
        setPageNumber(pageNumber => pageNumber - 1);
        const moveNum = Math.ceil(((endPages + startPages)/2) - 1);
        if(startPages === 0) {
            return null;
        } else if((pageNumber - 1)=== moveNum) {
            setStartPages(startPages => startPages - 1);
            setEndPages(endPages => endPages - 1);
        }
        
    }

    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
                {info.length > 0 ? info.slice(start, end).map((element) => <PokeCard key={element.id} info={element} />) : <p className="text-center w-full col-span-4 underline">No pokemon matches your selection, please try again!</p>}
            </div> 
            <div className="flex mt-3 items-center justify-center">
                <div className="flex justify-start">
                    {pageNumber > 1 ? <button onClick={handlePreviousClick} className="mr-2"><svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    </svg></button> : null}
                </div>
                {allPages && allPages.slice(startPages, endPages).map((item, index) => {
                return item === pageNumber ? <div key={index} className="mb-2 bg-black text-white border-2 border-black rounded-full h-10 w-10 flex items-center justify-center mr-2"> <p>{item}</p> </div>: <div key={index}className="mb-2 bg-white text-black border-2 border-black rounded-full h-10 w-10 flex items-center justify-center mr-2">
                <p>{item}</p></div>})
                } 
                {pageNumber !== allPages.length && info.length > 0 ? <button onClick={handleNextClick}><svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                </svg></button> : null}
            </div>
        </>
    );
}

export default FilterChosen;