var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onkeyup = function() {
  // Validate email
  var email = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
  if(myInput.value.match(email.value)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

}
// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
    // const indicator = document.getElementById(".indicator");
    // const myinput = document.getElementById("input");
    // const weak = document.getElementById(".weak");
    // const medium = document.getElementById(".medium");
    // const strong = document.getElementById(".strong");
    // const nest = document.getElementById(".text");
    // let regExpWeak = /[a-z]/;
    //   let regExpMedium = /\d+/;
    //   let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    //   function trigger(){
    //     if(myinput.value != ""){
    //       indicator.style.display = "block";
    //       indicator.style.display = "flex";
    //       if(myinput.value.length <= 3 && (myinput.value.match(regExpWeak) || myinput.value.match(regExpMedium) || myinput.value.match(regExpStrong)))no=1;
    //       if(myinput.value.length >= 6 && ((myinput.value.match(regExpWeak) && myinput.value.match(regExpMedium)) || (myinput.value.match(regExpMedium) && myinput.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong))))no=2;
    //       if(myinput.value.length >= 6 && myinput.value.match(regExpWeak) && myinput.value.match(regExpMedium) && myinput.value.match(regExpStrong))no=3;
    //       if(no==1){
    //         weak.classList.add("active");
    //         text.style.display = "block";
    //         text.textContent = "Your password is too week";
    //         text.classList.add("weak");
    //       }
    //       if(no==2){
    //         medium.classList.add("active");
    //         text.textContent = "Your password is medium";
    //         text.classList.add("medium");
    //       }else{
    //         medium.classList.remove("active");
    //         text.classList.remove("medium");
    //       }
    //       if(no==3){
    //         weak.classList.add("active");
    //         medium.classList.add("active");
    //         strong.classList.add("active");
    //         text.textContent = "Your password is strong";
    //         text.classList.add("strong");
    //       }else{
    //         strong.classList.remove("active");
    //         text.classList.remove("strong");
    //       }