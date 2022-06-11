const resultSpan = document.getElementById("result")

document.addEventListener("DOMContentLoaded", e => {

    const para = new URLSearchParams(window.location.search)
    const rating = para.get("RATING")
    resultSpan.innerText = rating
    // console.log(rating)
})
