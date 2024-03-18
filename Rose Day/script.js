var leftBtn = document.querySelector(".left");
var rightBtn = document.querySelector(".right");
var image = document.querySelector("img");
var comment = document.querySelector(".comment")


function angryBird(){

    // var x = Math.floor(Math.random()*(600 -100 +1))+100;
    // var y = Math.floor(Math.random()*(1000 -100 +1))+100;

    // leftBtn.style.position = "absolute";
    // leftBtn.style.top = x +"px";
    // leftBtn.style.left = y +"px";
}

const tasks = [
    ()=>{},

    () => {
        image.src = "./Images/second.gif";
        comment.innerHTML = "Do you remember today is Rose Day🤗";
        leftBtn.innerHTML = "So What🙄";
        rightBtn.innerHTML = "Yes Baby😍"
    },
    ()=>{},
    () => {
        document.querySelector("body").style.backgroundImage = "./Images/background.jpg";
        image.src = "./Images/happy.jpg";
        comment.innerHTML = " ";
        leftBtn.innerHTML = "Whatever🙄";
        rightBtn.innerHTML = "Happy Rose Day"
    },
    () =>{},
    () => {
        image.src = "./Images/roseday.gif";
        comment.innerHTML = "You bloomed in my heart like a rose in the garden.💖";
        leftBtn.innerHTML = "😁😁😁";
        rightBtn.innerHTML = "Wow🥰"
    },
    ()=>{},
    () => {
        image.src = "./Images/last.gif";
        comment.innerHTML = "I LOVE YOU💕";
        leftBtn.innerHTML = "LOVE U TOO";
        rightBtn.innerHTML = "LOVE U TOO"
    },
    
    () => {
        image.src = "./Images/finish.png";
        comment.style.visibility = "hidden";
        leftBtn.style.visibility = "hidden";
        rightBtn.style.visibility = "hidden"
    },
];
let count = 0;

function happyBird(){
    if (count < tasks.length) {
        tasks[count++]();   
    }
}

rightBtn.addEventListener("click",happyBird);
leftBtn.addEventListener("mouseenter",angryBird);