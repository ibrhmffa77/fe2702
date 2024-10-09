// task 1

function simpleTimer(){
    setTimeout(()=>{
        console.log("Time's up")
    }, 5000)
};
simpleTimer()

// task 2

function countDownTimer(){
    let countDown = 10;

    const intervalId = setInterval(()=>{
        countDown--;

        if(countDown < 0){
            clearInterval(intervalId);
            alert("Blast off!")
        }
        
    }, 1000)
};
countDownTimer()

// task 3

  function fetcData(){
    console.log("Fetching new data...");

}
setInterval(fetcData, 3000)

// task 4

const canselBtn = document.querySelector('#canselBtn')
let timer;

function startTimer(){

    timer = setInterval(()=>{
        console.log("Vaxt tamamlandi")
    }, 10000);
}

function canselTimer(){
    clearTimeout(timer);
    console.log("vaxt legv olundu")
};
  
canselBtn.addEventListener("click", canselTimer )
startTimer();

// task 5

function simpleProgressBar(){
    let progress = 0; 
    let interval;
    
    interval = setInterval(() => {
        
    }, 100);
}


// const myArr = [
//     {
//         a: '1', b: '2'
//     },
//     {
//         a: '2', b: '3'
//     }
// ]
// const test = myArr.map(({a:name, b:surname})=>{name, surname})
// console.log(test)