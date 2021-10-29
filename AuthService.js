//認証済みのユーザー取得するためのファイル

import React, { useState, useEffect } from 'react';
import firebase from './config/firebase';

const AuthContext = React.createContext();//AuthContextグローバルな値を指定する

//グローバルな値を渡したい値を指定するものをproviderという

const AuthProvider = ({ children }) => {//childrenだけは指定しなくても使える。
    //childrenはApp.jsのラップされた内を指す
    const [user, setUser] = useState(null);
    //todo:認証済みuserを取得してuserに格納する

    //useEffect
    //Dom操作＝＞レンダリングが終わらないとDOMが存在しないので操作しようがない
    //外部APIとのつうしん＝＞レンダリングとは関係ない
    //ブラウザに表示された後にuseEffectが実行される、つまり遅延実行する
    //

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
        //ろぐいんした時の処理を記載する.ユーザーの情報オブジェクト
    }, []);
    //第二引数は頻度を表す、無記入は初回のみレンダリングする。


    return (
        //渡したい値をvalueに記載
        <AuthContext.Provider value={user}>
            {children}

        </AuthContext.Provider>
    )

};

export {
    AuthProvider,
    AuthContext
}