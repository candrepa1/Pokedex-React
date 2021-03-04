import { createContext, useState, useContext } from 'react';

const authContext = createContext();

const fakeAuthProvider = {
    signIn: (cb) => {
        setTimeout(cb, 100);
    }, 
    signOut: (cb) => {
        setTimeout(cb, 100);
    }
}

const useProvideAuth = () => {
    const [user, setUser] = useState({user: false});

    const signIn = (cb, name) => {
        return fakeAuthProvider.signIn(() => {
            setUser({user: true, name: name});
            cb();
        })
    }

    const signOut = (cb) => {
        return fakeAuthProvider.signOut(() => {
            setUser({user: false});
            cb();
        })
    }

    return {
        user, 
        signIn, 
        signOut
    }
}

export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext);