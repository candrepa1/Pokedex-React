import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Encounters = () => {
    let location = useLocation();
    const [region, setRegion] = useState('');

    useEffect(() => {
        fetch(`${location.encounters}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const splitted = item.location_area.name.split('-');
                    const areaFixed = splitted.splice(0, 1);
                    setRegion(region => [...region, {'region': areaFixed, 'area': splitted}]);
                })
            });
    }, [location.encounters])

    return(
        <>
            {region ? <div> <p className="uppercase text-center mb-6 bg-black text-white p-2 rounded-lg text-3xl"> where can i find <b>{location.name}</b>?</p>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mb-4">
                    {region.map((item, index) => <div key={index} className="flex flex-col bg-gray-700 rounded-xl p-2 items-center justify-center text-white py-3"> <p className="capitalize text-center"><b>Region:</b> {item.region}</p> <p className="capitalize text-center"><b>Area:</b> {item.area.join(' ')} </p></div>)}
                </div> 
            </div> : <div className="flex justify-center items-center h-96"><h1 className="text-2xl">Sorry! We don't know where <b className="capitalize">{location.name}</b> has been...</h1></div>}
            <div className="flex justify-center">
                    <Link to="/pokedex" className="flex bg-blue-200 font-bold text-xl p-3 rounded-2xl"><svg className="mr-2 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    </svg>Back</Link> 
            </div> 
        </>
    );
}

export default Encounters;