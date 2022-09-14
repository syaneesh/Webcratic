// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAEbXkFvey5C-3BeAcD3ESbw4F5XGocpgY",
  authDomain: "webcratic-co.firebaseapp.com",
  databaseURL: "https://webcratic-co.firebaseio.com",
  projectId: "webcratic-co",
  storageBucket: "webcratic-co.appspot.com",
  messagingSenderId: "781246820115",
  appId: "1:781246820115:web:fbe9599e1903f1a6c874e6",
  measurementId: "G-JHQM5T4NF3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//   var database = firebase.database();


// Reference messages collection    
var messagesRef = firebase.database().ref('messages');

// Listen to form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();
    // console.log(123);

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, subject, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, subject, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        subject: subject, 
        email: email,
        phone: phone,
        message: message, 
    });
}


$( document ).ready(function() {
    new WOW().init();
  });


$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i = 0; i < 4; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });


// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});



