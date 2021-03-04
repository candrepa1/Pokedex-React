import React from 'react'; 
import {useAuth} from './provider/AuthProvider.js';

const WelcomeMessage = () => {
    const {user} = useAuth();

    return(
        <>
            {user.user ? <span className="text-black font-bold p-2 capitalize">Welcome Back, Pokemon Trainer {user.name}</span> : null}
        </>
    );
}

export default WelcomeMessage;