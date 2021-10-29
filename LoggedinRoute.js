import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from "./AuthService";

const LoggedInRoute = ({ component: Component, ...rest }) => {//JSXは先頭は大文字のため、再度component→Componentと付け直す
    //また、他のプロップス(exact path='/' )を呼び出す必要がある。...restに他のプロップスを入れる
    const user = useContext(AuthContext)

    return (
        <Route>
            {/* スプレット構文での...rest */}
            {...rest}
            component={
                //ログインしていれば描写する
                //ろぐいんしていなければ、”./login”にリダイレクト
                (routeProps) =>
                    user ? (
                        <Component {...routeProps}></Component>//ログインした時の動作
                    ) : (
                        <Redirect to="/login">

                        </Redirect>//ログインしていない時のリダイレクト
                    )
            }
        </Route>
    )
}

export default LoggedInRoute