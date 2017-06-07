import firebase from 'firebase';

try {
  var config = {
     apiKey: "AIzaSyD8H8214ImHa1i3Cr39pZzQ1SHjXtqDXks",
     authDomain: "grewal-todo-app.firebaseapp.com",
     databaseURL: "https://grewal-todo-app.firebaseio.com",
     projectId: "grewal-todo-app",
     storageBucket: "grewal-todo-app.appspot.com",
     messagingSenderId: "93993924951"
   };
   firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
