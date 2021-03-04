import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';


import Header from './components/header';
import Home from './components/Home/Home.js';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import IDashboard from "./components/instructorDB/instructorDB"

import CreateClass from './components/CreateClass/CreateClass';
import CreatePassCard from './components/CreatePassCard/CreatePassCard.js';


import { UserContext } from "./utils/UserContext";
import { useProfile } from "./utils/useProfile";
import PrivateRoute from './utils/PrivateRoute';

import ClientDashboard from './components/client/dashboard';
import Search from './components/client/Search';


const Container = styled.div`
    width:100%;
    height:100vh;
    margin:auto;
`

function App() {
    const [user, setUser] = useProfile();
  
    return <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
            <Header />
            
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path='/createclass' component={CreateClass} />

                    {
                        user.instructor === false 
                        ?
                        <PrivateRoute path="/dashboard" component={ ClientDashboard }/>
                        :
                        <PrivateRoute path="/dashboard" component={ IDashboard }/> //instructor dash once craig merges with main
                    }
                    <Route path="/search" component={ Search }/>
                    <Route path='/createpass' component={CreatePassCard} />
                </Switch>
            </Container>
        </UserContext.Provider>

    </div>;

}

export default App;
