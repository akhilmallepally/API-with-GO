import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';
import Scientists from './components/Scientists';
import Admin from './components/Admin';
import Home from './components/Home';
import Categories from './components/Categories';
import OneScientist from './components/OneScientist';

export default function App() {
    return(
        <Router>
        <div className='container'>
            <div className='row'>
                <h1 className='mt-3'>
                    Get Computer Scientists details
                </h1>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <nav>
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/scientists'>Scientists</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/by-category'>Categories</Link>
                            </li>
                            <li className='list-group-item'>
                                <Link to='/admin'>Manage Catalogue</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-md-10'>
                    <Switch>
                        <Route path='/scientists/:id' component={OneScientist} />

                        <Route path='/scientists'>
                            <Scientists />
                        </Route>
                        <Route exact path='/by-category'>
                            <CategoryPage />
                        </Route>
                        <Route 
                        exact
                        path="/by-category/science"
                        render={(props) => <Categories {...props} name={`Science`}/>}

                        />
                        <Route 
                        exact
                        path="/by-category/math"
                        render={(props) => <Categories {...props} name={`Math`}/>}

                        />
                        <Route path='/admin'>
                            <Admin />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
        </Router>
    );
}


function CategoryPage() {
    let {path, url} = useRouteMatch();
    return (
        <div>
        <h2>Categories</h2>
        <ul>
            <li><Link to={`${path}/science`}>Science</Link></li>
            <li><Link to={`${path}/math`}>Math</Link></li>
        </ul>
        </div>
    );
}