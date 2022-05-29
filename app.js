const burger = document.querySelector(".burger");
const buttons = document.querySelector(".buttons");
const navbar = document.querySelector(".navbar");

const signup = document.querySelector(".signup");
const CTA = document.querySelector(".CTA");
const CTA2 = document.querySelector(".CTA2");

const freetrialarray = [signup, CTA, CTA2]

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    buttons.classList.toggle('active')
})


freetrialarray.forEach(element => {
    element.addEventListener('click', () => {
        location.href = "Signup.html"
    })
});

