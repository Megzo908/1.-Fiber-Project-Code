const toggle = document.querySelector(".togglepassword");
const password = document.querySelector("#Password");


toggle.addEventListener('click', ()=>{
    if (password.type === 'password') {
        password.type = 'text'
    }
    else{
        password.type = 'password'
    }
})