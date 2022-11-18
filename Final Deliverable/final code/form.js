import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  const firebaseConfig = {

    apiKey: "AIzaSyAYz2ksmYCQUhcq6eM5_l06V7YBF0ApwYE",

    authDomain: "smart-fashion-application.firebaseapp.com",

    projectId: "smart-fashion-application",

    storageBucket: "smart-fashion-application.appspot.com",

    messagingSenderId: "778364059736",

    appId: "1:778364059736:web:92dbe87612d1d94e8bca2d"

  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


document.getElementById("reg-btn").addEventListener('click',function(){
    document.getElementById("login-div").style.display="none";
        document.getElementById("register-div").style.display="inline";
});

document.getElementById("log-btn").addEventListener('click',function(){
    document.getElementById("register-div").style.display="inline";
        document.getElementById("login-div").style.display="none";
});

document.getElementById("login-btn").addEventListener('click',function(){
   const  loginEmail = document.getElementById("login-email").value;
   const  loginPassword = document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
        const user = userCredential.user;
        document.getElementById("result-box").style.display="inline";
        document.getElementById("login-div").style.display="none";
        document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"was login Successfully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry!!"+errorMessage;
  });


});











