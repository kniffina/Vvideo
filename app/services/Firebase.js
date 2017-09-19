import * as Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCBamsDGJUeipmiBe5GqXaC95fnYrbPYBA",
    authDomain: "vvideo-170618.firebaseapp.com",
    databaseURL: "https://vvideo-170618.firebaseio.com",
    projectId: "vvideo-170618",
    storageBucket: "vvideo-170618.appspot.com",
    messagingSenderId: "1088169881133"
};

export const firebaseRef  = Firebase.initializeApp(config);