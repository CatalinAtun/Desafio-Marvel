import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '.././App';
import Info from './Info/Info'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/info/:id" component={Info} />
        </Switch>
    </BrowserRouter>
);

export default Router;