import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';


import Header from './components/header';

import ClientDashboard from './components/client/dashboard';


const Container = styled.div`
    width:60%;
    margin:auto;
    margin-top:2%;
`

function App() {
    return <div className="App">
        <Header />
        
        <Container>
            <Switch>
                <Route path="/dashboard" component={ ClientDashboard }/>
            </Switch>
        </Container>

    </div>;
}

export default App;
