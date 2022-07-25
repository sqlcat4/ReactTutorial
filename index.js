const incrementbtn = document.getElementById('increment-btn')
const countDisplay = document.getElementById('count-disp')
let currentCount = 0

incrementbtn.addEventListener('click', ()=>{
    currentCount++
    countDisplay.innerText = currentCount
})


const incrementbtn2 = document.getElementById('increment-btn2')
const countDisplay2 = document.getElementById('count-disp2')

let currentCount2 = 0



incrementbtn2.addEventListener('click', ()=>{
    currentCount2++
    countDisplay2.innerText = currentCount2
})