import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';


import Header from './components/header';

import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

import { UserContext } from "./utils/UserContext";
import { useProfile } from "./utils/useProfile";
import PrivateRoute from './utils/PrivateRoute';

import ClientDashboard from './components/client/dashboard';
import Search from './components/client/Search';


const Container = styled.div`
    width:60%;
    margin:auto;
    margin-top:2%;
`

function App() {
    const [user, setUser] = useProfile();

    return <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
            <Header />
            
            <Container>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/dashboard" component={ ClientDashboard }/>
                    <Route path="/search" component={ Search }/>
                </Switch>
            </Container>
        </UserContext.Provider>

    </div>;
}

export default App;
