import React, { Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {NotFound} from './NotFound';

class Header extends Component {
    render() {
        return(
                <nav  class="navbar" role="navigation" aria-label="main navigation">
                    <Switch>
                        <Route  path="/NotFound" component={NotFound} >
                            Inicio
                        </Route>
                    </Switch>
                </nav>
           
        );
    }
}
export default Header;
