import { Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Home from "./components/Home/Home.js";

import { UserContext } from "./utils/UserContext";
import { useProfile } from "./utils/useProfile";

function App() {
    const [user, setUser] = useProfile();
    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </main>
            </UserContext.Provider>
        </div>
    );
}

export default App;
