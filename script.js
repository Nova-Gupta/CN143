 const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const profile1= document.querySelector('.profile1');



registerLink.addEventListener('click', () => { 
    wrapper.classList.add('active'); 
});


loginLink.addEventListener('click', () => {
     wrapper.classList.remove('active'); 
});

profile1.addEventListener('click', () => { 
    wrapper.classList.add('active-popup'); 
});


// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//   const userChoice = prompt('Do you want to login or sign up?');
//   if (userChoice.toLowerCase() === 'login') {
//     alert('You chose to login.');
//   } else if (userChoice.toLowerCase() === 'sign up') {
//     alert('You chose to sign up.');
//   } else {
//     alert('Sorry, I didn\'t understand your choice.');
//   }
// });
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  alert('You clicked the button!');
});