const firebaseConfig = {
  apiKey: "AIzaSyD2OeUNDTpU2l9eh0ZR0gTXBAJ_KU-vbZQ",
  authDomain: "test-4d92f.firebaseapp.com",
  databaseURL: "https://test-4d92f.firebaseio.com",
  projectId: "test-4d92f",
  storageBucket: "test-4d92f.appspot.com",
  messagingSenderId: "609390900195",
  appId: "1:609390900195:web:25f5270405789de6d2e6d6",
  measurementId: "G-DCHZTY80LM",
};

var defaultProject = firebase.initializeApp(firebaseConfig);

var defaultStorage = defaultProject.storage();
var defaultFirestore = defaultProject.firestore();
var actionCodeSettings = {
  url: "https://www.example.com/finishSignUp?cartId=1234",
  handleCodeInApp: true,
  dynamicLinkDomain: "example.page.link",
};

(__init) => {
  defaultStorage = firebase.storage();
  defaultFirestore = firebase.firestore();
};

function login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function register(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function password(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}
function sign(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function signout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
}

function email(email, actionCodeSettings) {
  firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function () {
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch(function (error) {});
}

$(function () {
  __init();
});
