import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import root from '../sagas/root'

import 'bulma'

import PageNotFound from './404'
import RoutedComponent from './routed/routed-component'
import FacultiesPage from './optimized/facultyMenu/facultyMenu'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

sagaMiddleware.run(root)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={FacultiesPage}/>
                        <Route exact path='/:faculty/:level/:course' component={RoutedComponent} />
                        <Route path='*' component={PageNotFound}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
