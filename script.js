const ratings = document.querySelectorAll(".rating-box > .cercle")
const button = document.querySelector(".btn")
const state = {
    clickedId: null,
    active: false
}

ratings.forEach(rating => {
    rating.addEventListener("click", e => {
    
        if (e.target instanceof Element) { 
            if(!state.clickedId){
                e.target.classList.toggle("selected")
                state.clickedId = e.target.id
                state.active = !state.active
                return
            }
            if(e.target.id === state.clickedId){
                e.target.classList.toggle("selected")
                state.active = !state.active
                return
            }

            if(state.active){
                const oldElement = document.getElementById(state.clickedId)
                oldElement.classList.toggle("selected")
                state.active = !state.active
            }

            e.target.classList.toggle("selected")
            state.clickedId = e.target.id
            state.active = !state.active
        }
    })
})

button.addEventListener("click", e => {
    if (e.target instanceof Element) {
        var para = new URLSearchParams()
        para.append("RATING", state.clickedId)
        e.target.setAttribute("href", `thank-you.html?${para.toString()}`)
    }
})