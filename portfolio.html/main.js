// Initialize Firebase (ADD YOUR OWN DATA)

var config = {
    apiKey: "AIzaSyCEwk8uBpypJCabteHkxpu7NCdB7t8qtcc",
    authDomain: "younglings-6a602.firebaseapp.com",
    databaseURL: "https://younglings-6a602.firebaseio.com",
    projectId: "younglings-6a602",
    storageBucket: "younglings-6a602.appspot.com",
    messagingSenderId: "319522878635",
    appId: "1:319522878635:web:f05c023e52f40a21bc73ee",
    measurementId: "G-9VK47NBZ6E"
  };

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('message');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var last_name = getInputVal('last_name');
    var country = getInputVal('country');
    var subject = getInputVal('subject');
   
  
    // Save message
    saveMessage(fname, lname, country, subject);
 
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname,lname, country, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname:lname,
      country:country,
      subject:subject,
    });
  }