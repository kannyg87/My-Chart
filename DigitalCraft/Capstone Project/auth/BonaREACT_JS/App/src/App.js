import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import News from './pages/News';
import NewsSinglePost from './pages/NewsSinglePost';
import Gallery from './pages/Gallery';
import SearchResults from './pages/SearchResults';
// import Services from './pages/Services';
// import ServicesInside from './pages/ServicesInside';
import page404 from './pages/404';
import UserInterface from './pages/UserInterface';
import Signup from './pages/loging';
import Signin from './blocks/login/auth/signin'

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/about-us" }` }
                    component={ About }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/contacts" }` }
                    component={ Contacts }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news" }` }
                    component={ News }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/gallery" }` }
                    component={ Gallery }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news-single-post" }` }
                    component={ NewsSinglePost }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
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
    );
}

export default App;
