import React from 'react';
import 'materialize-css'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, isAuthenticated
        }}>
            { isAuthenticated && <Navbar /> }
            <div className='container'>
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
