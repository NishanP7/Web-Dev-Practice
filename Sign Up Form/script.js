let submitButton=document.getElementById("submitButton");
let errors={};
submitButton.addEventListener("click",function(e){
    e.preventDefault();
   let signupForm = document.forms["signupForm"];
   let firstNameInput = signupForm.firstName;
   let lastNameInput = signupForm.lastName;
   let emailInput = signupForm.email;
   let passwordInput = signupForm.password;

   if(firstNameInput.value == ""){
    errors.firstName = "First Name should not be empty."
   }
   if(lastNameInput.value == ""){
    errors.lastName = "Last Name should not be empty."
   }
   if(emailInput.value ==""){
    errors.email="Email Address should not be empty."
   }
   if(passwordInput.value ==""){
    errors.password="Password should not be empty."
   }
   if(passwordInput.value.length <= 5){
    errors.password="Password should be 5 characters minimum"
   }

   console.log(errors);
   for (let error in errors){
    let lastNameGroup = document.getElementById(`${error}Group`);
    let lastNameMessage = document.querySelector(`#${error}Group .message`);
    lastNameGroup.classList.add("error");
    lastNameMessage.textContent=errors[error];
   }
   if(Object.keys(errors).length == 0){
    signupForm.submit();
   } 
});

//    if(emailInput.value == ""){
//     let emailGroup = document.getElementById("emailGroup");
//     let emailMessage = document.querySelector("#emailGroup .message");
//     emailGroup.classList.add("error");
//     emailMessage.textContent="Email should not be Empty."
//    }
   
//    if(passwordInput.value == ""){
//     let passwordGroup = document.getElementById("passwordGroup");
//     let passwordMessage = document.querySelector("#passwordGroup .message");
//     passwordGroup.classList.add("error");
//     passwordMessage.textContent="Password should not be Empty."
//    }
 