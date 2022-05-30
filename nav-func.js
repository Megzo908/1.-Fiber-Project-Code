const signup = document.querySelector(".signup")
const burger = document.querySelector(".burger")
const buttons = document.querySelector(".buttons")
const navbar = document.querySelector(".navbar")

signup.addEventListener("click", () => {
  location.href = "Signup.html"
})

burger.addEventListener("click", () => {
  navbar.classList.toggle("active")
  buttons.classList.toggle("active")
})
