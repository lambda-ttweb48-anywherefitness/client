import { Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import CreateClass from './components/CreateClass/CreateClass';
import CreatePassCard from './components/CreatePassCard/CreatePassCard.js';

import { UserContext } from "./utils/UserContext";
import { useProfile } from "./utils/useProfile";

function App() {
    const [user, setUser] = useProfile();
    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <main>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path='/createclass' component={CreateClass} />
                        <Route path='/dashboard' />
                        <Route path='/createpass' component={CreatePassCard} />
                    </Switch>
                </main>
            </UserContext.Provider>
        </div>
    );
}

export default App;
