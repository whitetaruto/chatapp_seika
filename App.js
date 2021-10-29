import React from 'react'

import Login from './Login'
import SignUp from './SignUp'
import Room from './Room'

import { AuthProvider } from "./AuthService"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room}></LoggedInRoute>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/signup' component={SignUp}></Route>
                    {/*ろぐいんしているユーザーのみが閲覧できるページにする */}

                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App