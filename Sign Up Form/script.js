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
    errors.firstName = "First Name should not be Empty."
    
   }

   if(lastNameInput.value == ""){
    errors.lastName = "Last Name should not be Empty."
    // let lastNameGroup = document.getElementById("lastNameGroup");
    // let lastNameMessage = document.querySelector("#lastNameGroup .message");
    // lastNameGroup.classList.add("error");
    // lastNameMessage.textContent="Last Name should not be Empty."
   }
   console.log(errors);
   for (let error in errors){

   } 
   
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
});
 