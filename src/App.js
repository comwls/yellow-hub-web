import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './_helpers';
import Routes from './routes';
import LayoutHeader from './components/common/LayoutHeader';
import LayoutFooter from './components/common/LayoutFooter';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.scss';

function App(props) {
    return (
        <div id="root">
        <Router history={history}>
          <React.Fragment>
                <div id="content">
                    {Routes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => <route.component {...props} />}
                            />
                        );
                    })}
                </div>
            </React.Fragment>
            {/* <LayoutHeader />
                <Route path="/login" name="login" component={LoginPage} />
                <Route path="/signup" name="signup" component={SignUpPage} />
                <Switch>
                
                </Switch>
            <LayoutFooter /> */}
        </Router>
        </div>
    );
}

export default App;