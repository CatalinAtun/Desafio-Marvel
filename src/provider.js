import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB7oV0ZQq95as7R0p2ozl3_nKKIarUUFRo",
    authDomain: "marvel-desafio-3bae8.firebaseapp.com",
    databaseURL: "https://marvel-desafio-3bae8.firebaseio.com",
    projectId: "marvel-desafio-3bae8",
    storageBucket: "marvel-desafio-3bae8.appspot.com",
    messagingSenderId: "757463644495",
    appId: "1:757463644495:web:500db96dc9d1a40b"
};
firebase.initializeApp(config);

export const database = firebase.database();