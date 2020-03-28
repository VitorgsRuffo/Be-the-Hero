//we'll need to configure routes in the frontend so that we can jump through different pages.
//installing the needed package: npm install react-router-dom 
//NOTE: routes are components!

import React from 'react';

//importing the needed components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import the pages:

    //login page:
    import Login from './pages/Login';  //as we are not specifying the file, React will search for the index one.

    //register page:
    import Register from './pages/Register';

    //profile page:
    import Profile from './pages/Profile';

    //new incident page:
    import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}


