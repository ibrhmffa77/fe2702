const downBtn = document.querySelector('#downBtn');
const stpBtn = document.querySelector('#stpBtn');
let interval;
downBtn.addEventListener('click',()=>{
    const counterElement = document.querySelector('#span');
    // let counter = Number(counterElement.innerText);
    
//    const span = setInterval(()=>{
//         countDown--;
//         if(countDown<0){
//             clearInterval(span);
//             alert("countDown bitdi")
//         }
//     }, 1000)
let span = 5; 
const interval = setInterval(() => {
    let minutes = Math.floor(span / 60).toString().padStart(2, '0');
    let seconds = (span % 59).toString().padStart(2, '0');
    console.log(span);
    span--;
    counterElement.textContent =span;
    counterElement.textContent = `${minutes}:${seconds}`;
    if (span < 0) {
        clearInterval(span);
        counterElement.textContent = "00:00";
        counterElement.classList.add('red')
        alert('Count bitdi');
    }
}, 1000);
});

stpBtn.addEventListener('click',() => {
    clearInterval(interval);
})