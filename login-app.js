// 1. get DOM element
const form = document.querySelector('#form')

// const jobsList = document.querySelector('a')

// GamepadButton.addEventListener('click')

// onclick

// button 
// querySelector

// wrap this around click function

console.log(form)

form.addEventListener('submit', function () {
  // e.preventDefault()

// const newElement = document.createElement("div")

// const mylink = document.querySelector('#bttn')

// mylink.innerHTML=`$`

//   `<a href="./search-display.html"></a>`

  // validateEmpty(username)
  validateEmpty(email)
  validateEmpty(password1)
  validateEmpty(password2)

  // validateMinLength(username)
  // validateMinLength(password2)
  // validateIsEmail(email)

  validatePassMatch(password2, password1)

  //@TODO: Code Challenge 5c: Starting from your refactored code,
  // 1. Implement and use the  validatePassMatch() function to confirm both passwords match
  // 2. Implement and use the emailValidates() function to confirm it's a valid email. See: https://stackoverflow.com/a/46181

  //@TODO: Code Challenge 5b: Refactor your CC 5a to use function with the "blueprints" below
  // validateIsEmail(email)

})

function validateEmpty(input) { 
  if (input.value === '') {
    showError(input, `${input.name} is empty`)
  } else {
    showSuccess(input)
  }
}

function showError (input, msg) {
  input.nextElementSibling.innerHTML = `<small class="text-white uppercase">❌ ${msg}</small>`
  input.className='error'
}

function showSuccess (input) {
  input.nextElementSibling.innerHTML = `<small class="text-white ">✅ </small>`
  input.className= 'success-input'
}

function validateIsEmail (email) {
  // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // console.log(re)
  if (emailValidates(email)) {
    showSuccess(email)
  } else {
    showError(email)
  }
}

function emailValidates (email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return true
}
// console.log(emailValidates)
  
function validatePassMatch (password1, password2) {
  if (password2.value != password1.value) {
    showError(password2, "does not match")
  } 
}


function validateMinLength (input) {
  console.log(input.value.length)
  if (input.value.length < 5 || input.value.length > 14) {
  showError(input)
  } else {
    showSuccess(input)
  }
}

  // Our web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDaQ1_fMKNBRJIGBXOMAWCL_f2gaVLbQV4",
    authDomain: "my-job-tracker.firebaseapp.com",
    projectId: "my-job-tracker",
    storageBucket: "my-job-tracker.appspot.com",
    messagingSenderId: "1072074186001",
    appId: "1:1072074186001:web:33462079bc0dbb07afc0b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   // add a reference to the authentication app 

    const auth = firebase.auth();

    // Define register function
    function register() {
      var email = document.getElementById("email")
      var password = document.getElementById("password")

      // Create a new user account associated with the specified email 
      // address and password in the authentication app by creating a promise
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

      // Setup an alert system that may catch error that may occur: improper email 
      // formating or if the password is less than 6 characters long
      promise.catch(e => alert(e.message));
      alert("Registered!");
    }

    // Define signIn/login function for registered users
    function signIn() {
      var email = document.getElementById("email")
      var password = document.getElementById("password")
      const promise = auth.signInUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      alert("Signed In!" + email);
    }

    // Define signOut functiom
    function signOut() {
      auth.signOut();
      alert("Sihned Out!");
    }

    auth.onAuthStaticChanged(function(user){

      if(user) {
        var email = user.email;
        alert("Active User " + email);
        // is signed in
      } else {
        alert("No Active User!")
        // no user is sgned in
      }
    })

    // Testing example code from https://firebase.google.com/learn/codelabs/firebase-get-to-know-web#4

    // Firebase App (the core Firebase SDK) is always required
// and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";