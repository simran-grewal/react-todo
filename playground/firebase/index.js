import firebase from 'firebase';

var config = {
   apiKey: "AIzaSyD8H8214ImHa1i3Cr39pZzQ1SHjXtqDXks",
   authDomain: "grewal-todo-app.firebaseapp.com",
   databaseURL: "https://grewal-todo-app.firebaseio.com",
   projectId: "grewal-todo-app",
   storageBucket: "grewal-todo-app.appspot.com",
   messagingSenderId: "93993924951"
 };
 firebase.initializeApp(config);

 var firebaseRef = firebase.database().ref();
 firebaseRef.set({
     app: {
       name: 'ReactTodo',
       version: '1.2.3'
     },
     isRunning: true,
     user: {
       name: 'Simran',
       age: 22
     }
 });




var todos = firebaseRef.child('todos');

  for(var i  = 1; i <= 5; i++){
     todos.push({
      text: `Todo no ${i} is added`
    });
  }

  todos.on('child_added', (snapshot) => {
    console.log('Child_added',snapshot.key, snapshot.val());
  });



// Working With Arrays In  The Firebase

 // var notesRef = firebaseRef.child('notes');


 // var newNoteRef = notesRef.push(); // create new item in current reference
 //
 // newNoteRef.set({
 //   text: 'walk the dog'
 // });

//OR


 // notesRef.on('child_added', (snapshot) => {
 //    console.log('child_added',snapshot.key, snapshot.val());
 // });
 //
 // notesRef.on('child_changed', (snapshot) => {
 //    console.log('child_changed',snapshot.key, snapshot.val());
 // });
 //
 // notesRef.on('child_removed', (snapshot) => {
 //    console.log('child_removed',snapshot.key, snapshot.val());
 // });
 //
 // var newNoteRef = notesRef.push({
 //    text: 'walk the dog!!'
 // });
 //
 // console.log('Todo Is', newNoteRef.key);

 // firebaseRef.update({
 //   isRunning: false,
 //   'app/name': 'Todo Application'
 // });

  // firebaseRef.child('user').update({
  //   name: 'Grewal'
  // }).then(() => {
  //   console.log('Update worked');
  // }, (e) => {
  //   console.log('Update Failed');
  // });

    // firebaseRef.update({
    //   user: {
    //     name: 'Grewal'
    //   }
    // });


    // Multipath Update
    // firebaseRef.update({
    //   'app/name': 'ReactTimerApp',
    //   'user/name': 'Harman'
    // });



    // Child Update
    // firebaseRef.child('app').update({
    //   name: 'Todo Application'
    // });
    //
    // firebaseRef.child('user').update({
    //   name: 'Grewal'
    // });


    // TO Remove Eery Thing from databaseURL
  //  firebaseRef.remove();

  //  firebaseRef.child('app/name').remove();

    // Update and remove
    // firebaseRef.child('app').update({
    //   version: '2.0.3',
    //   name: null
    // });

    // firebaseRef.update({
    //   isRunning: null
    // });
    //
    // firebaseRef.child('user/name').remove();



    // Fetching  Data from root of firebase

    // firebaseRef.once('value').then((snapshot) => {
    //   console.log('Got entire database', snapshot.val());
    // }, (e) => {
    //     console.log('Unable to fetch value')
    // })


    //Fetching data from the child of the firebase
    // firebaseRef.child('app').once('value').then((snapshot) => {
    //   console.log('Got entire database', snapshot.key ,snapshot.val());
    // }, (e) => {
    //     console.log('Unable to fetch value')
    // })



    // To Listen when there is some change in the database

    // var logData = (snapshot) => {
    //     console.log('Got value', snapshot.val());
    // };
    //
    // firebaseRef.on('value',logData);
    // firebaseRef.off();
    // firebaseRef.update({
    //   isRunning: false
    // });


    // firebaseRef.child('user').on('value', (snapshot) => {
    //   console.log('Got Value', snapshot.val());
    // });
    //
    // firebaseRef.update({
    //     'user/name': 'YOYo'
    //   });
    //
    //   firebaseRef.update({
    //     'app/name': 'ChatAPP'
    // });
