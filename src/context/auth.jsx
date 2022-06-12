
import { createContext }from "react";
// import { useContext } from 'react';


export const AuthContext = createContext({
    isAuth: false,
    isLoading: true,
    handle: () => {},
});

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);

    const handle = (state) => {
        setIsAuth(state);
    
    };

    return (
        <AuthContext.Provider value={{ isAuth,  handle }}>
            {children}
        </AuthContext.Provider>
    );
}