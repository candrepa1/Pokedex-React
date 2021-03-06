import React, { useState } from 'react';
import { useAuth } from './provider/AuthProvider.js';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [pokeTrainer, setPokeTrainer] = useState('');

    const { signIn } = useAuth();
    const history = useHistory();

    const handleChange = (e) => {
        setPokeTrainer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(() => { history.push('/pokedex') }, pokeTrainer);
    }

    return(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="mb-6 text-center text-2xl">BECOME A POKEMON TRAINER!</h1>
                <form onSubmit={handleSubmit}>
                    <input className="border-2 border-black rounded-md p-2 mr-2 w-96 capitalize" placeholder="Your Pokemon Trainer Name" value={pokeTrainer} onChange={handleChange}/>
                    <div className="flex justify-center mt-6">
                        <button className="border-2 rounded-md p-2 border-black font-bold">Login</button>
                    </div>
                </form>
            </div>
    );
}

export default Login;