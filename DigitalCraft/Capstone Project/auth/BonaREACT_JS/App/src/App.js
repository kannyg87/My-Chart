import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import PatientDashboard from './pages/PatientDashboard';
// import Services from './pages/Services';
// import ServicesInside from './pages/ServicesInside';
import page404 from './pages/404';
import UserInterface from './pages/UserInterface';
import Signup from './pages/loging';
import Signin from './blocks/login/auth/signin'

import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
//import requireAuth from './requireAuth';

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
let store = createStore(reducer, {},  
    compose(
      applyMiddleware(reduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  
  //provider hooks react to redux.  
  //Must pass redux instance to provider via "store" prop.

function App() {
    return (
        <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/admin-dashboard" }` }
                    component={ AdminDashboard }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/patient-dashboard" }` }
                    component={ PatientDashboard }
                />
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/services" }` }
                    component={ Services }
                /> */}
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/services-inside" }` }
                    component={Signin }
                /> */}
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/signup" }` }
                    component={ Signup}
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/signin" }` }
                    component={ Signin}
                />
                <Route exact component={ page404 } />
            </Switch>
        </Router>
        </Provider>
  </React.StrictMode>
    );
}

export default App;
