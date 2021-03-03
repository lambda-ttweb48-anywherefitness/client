import { Switch, Route } from "react-router-dom";
import React from "react";

import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import IDashboard from "./components/instructorDB/instructorDB"

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
                        <Route path="/instructorDB" component={IDashboard} />
                    </Switch>
                </main>
            </UserContext.Provider>
        </div>
    );
}

export default App;
