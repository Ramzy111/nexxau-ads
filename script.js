const scriptURL = 'https://script.google.com/macros/s/AKfycby51XZ8S1HR0FKnHeyTcGGUplgxWivwMKEmmsUf6N-OLJ9s7jvqOu52pWDhlsQLzTI04A/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("thank-you-for-subscribing-message");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        msg.innerHTML = "Thank you for subscribing!";
        setTimeout(function(){
        msg.innerHTML = "";
    },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message));
});
