import React from 'react'
import { Link } from 'react-router-dom'
import firebase from './config/firebase'

import { AuthContext } from "./AuthService";

const Login = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {//プリベントデフォルト：リンクのデフォルトを無効化し、JSを実行する
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('logged In!')//ろぐいんの表示
                history.push("/")//ろぐいんした時にhistoryにリダイレクトする
            })
            .catch(err => {
                console.log(err)//エラーの表示
            })

    }

    //ろぐいんしている場合は"./"へリダイレクトする
    if (user) {
        return <Redirect to="/"></Redirect>
    }


    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <Link to='/signup'>Sign Up</Link>
        </>
    )
}

export default Login