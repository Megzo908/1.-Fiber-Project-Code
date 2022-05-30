const CTA = document.querySelector(".CTA")
const CTA2 = document.querySelector(".CTA2")

const freetrialarray = [CTA, CTA2]

freetrialarray.forEach(element => {
  element.addEventListener("click", () => {
    location.href = "Signup.html"
  })
})
