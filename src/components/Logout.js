import React from 'react';
import {useAuth} from './provider/AuthProvider.js';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const {user, signOut } = useAuth();
    const history = useHistory();

    return(
        <>
            {user.user ? <button onClick={() => signOut(() => {history.push('/')})} className="bg-black text-white border-2 rounded-md p-2 font-bold mt-3">Log Out</button> : null}
        </>
    );
}

export default Logout;