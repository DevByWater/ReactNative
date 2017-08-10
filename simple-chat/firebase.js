import firebase from 'firebase'

import { API_KEY } from './settings'

class Firebase {
    uid = ''
    messageRef = null

    constructor(){
        firebase.initializeApp({
            apiKey: API_KEY,
            authDomain: "simple-native-chat.firebaseapp.com",
            databaseURL: "https://simple-native-chat.firebaseio.com",
            projectId: "simple-native-chat",
            storageBucket: "simple-native-chat.appspot.com"
        })
        
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setUid(user.uid)
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    alert(error.message)
                })
            }

        })
    }

    setUid(value){
        this.uid = value
    }

    getUid(){
        return this.uid
    }

    loadMessages(callback){
        this.messageRef = firebase.database().ref('messages')
        this.messageRef.off()
        const onRecieve = data => {
            const message = data.val()
            callback({
                _id: data.key,
                text: message.text,
                createdAt: new Date(message.createdAt),
                user: {
                    _id: message.user._id,
                    name: message.user.name
                }
            })
        }
        this.messageRef.limitToLast(20).on('child_added', onRecieve)
    }

    sendMessage(message){
        for(let i = 0; i < message.length; i++){
            this.messageRef.push({
                text: message[i].text,
                user: message[i].user,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            })
        }
    }

    closeChat(){
        if(this.messageRef){
            this.messageRef.off()
        }
    }
}

export default new Firebase()