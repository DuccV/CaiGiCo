const no = document.querySelector("input[value='No']")
const yes = document.querySelector("input[value='Yes']")
const txt = document.querySelector(".txt")


function clickSua(){
    no.style.display = 'inline-block'
    yes.style.display = 'inline-block'
    document.querySelector("input[value='Sủa']").style.display = "none"
    txt.textContent = "I Love You.Do you love me?"
}
let n,p;
n = 1
p = 1
no.addEventListener("mouseover", () => {
    n = n + 0.1
    p = p - 0.05
    const x = Math.floor(Math.random() * window.innerWidth/2 -150) + 50
    const y = Math.floor(Math.random() * window.innerHeight/2 -150) + 50
    no.style.left = `${x}px` 
    no.style.top = `${y}px`
    yes.style.transform = `scale(${n})`
    no.style.transform = `scale(${p})`
})


function display(){
    document.querySelector('.gif_1').src = "cucucu.gif"
    no.style.display = "none"
    yes.style.display = "none"
    txt.innerHTML = "<h2>Ko biet viet gi :)</h2>"
}

function display2(){
    document.querySelector('.gif_1').src = "cucucu.gif"
    no.style.display = "none"
    yes.style.display = "none"
    txt.innerHTML = "<h2>Sao May Dam >:((((</h2>"
}