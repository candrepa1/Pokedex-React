import React from 'react';
import {useAuth} from './provider/AuthProvider.js';

const Logout = () => {
    const {user, signOut } = useAuth();

    return(
        <>
            {user.user ? <button onClick={() => signOut(() => {})} className="bg-black text-white border-2 rounded-md p-2 font-bold mt-3">Log Out</button> : null}
        </>
    );
}

export default Logout;