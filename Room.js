import React, { useEffect, useState, useContext } from 'react'
import firebase from "./config/firebase"
import { AuthContext } from "./AuthService";


const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    const user = useContext(AuthContext)
    console.log(user.displayName)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection("messages")
            .add({
                content: value,
                user: user.displayName
            })
    }

    //データベースからデータを取得する。副作用なのでレンダリングから分離する
    useEffect(() => {
        firebase.firestore().collection('messages')//取得するものを記載、今回はmessagesのみ
            .onSnapshot((snapshot) => {//取得するメゾット
                const messages = snapshot.doc.map(doc => {//snapshotの中のdocの配列の中から
                    return doc.data()//dataというメゾットを実行することでmassagesの必要な情報を一つ一つ引き出せる
                })

                setMessages(messages)//setMessagesで初期データ（messages）を格納している
            })
    }, [])

    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages.map(message => <li>{message.user}: {message.content}</li>)
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input>
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                </input>
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>logout</button>
        </>
    )
}

export default Room