// const data = '{"id":356,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';

// let myData = JSON.parse(data);
// myData.id = 157;
// let newData = JSON.stringify(myData);
// console.log(newData);


// let btn = document.querySelector(".jokeButton")
// let p = document.querySelector(".jokeDisplay")

// btn.addEventListener("click", () => {
//     fetch("https:api.chucknorris.io/jokes/random")
//     .then(response => response.json())
//     .then(data => {
//         p.textContent = data.value;
//     })
// })



// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())  
//   .then(data => {    
//     console.log(data);  
// })  
//     .catch(error => {    console.log(`Произошла ошибка: ${error.message}`);  
// });


// function getRandomColor() {
//     let r1 = Math.floor(Math.random() * 255)
//     let r2 = Math.floor(Math.random() * 255)
//     let r3 = Math.floor(Math.random() * 255)
//     return `rgb(${r1},${r2},${r3})`
// }
// getRandomColor()

// document.querySelector("p").addEventListener("mouseenter", (e) => {
//     e.target.style.color = getRandomColor();
// })









let number = 0;

function increaseNumber() {
    number++;
    return number;
}
document.querySelector(".increase").addEventListener("click", () =>{
    document.querySelector("h1").textContent = increaseNumber()
});

function decreaseNumber() {
    number--;
    return number;
}
document.querySelector(".decrease").addEventListener("click", () =>{
    document.querySelector("h1").textContent = decreaseNumber()
});

function increaseNumber5() {
    number += 5;
    return number;
}
document.querySelector(".increase5").addEventListener("click", () =>{
    document.querySelector("h1").textContent = increaseNumber5()
});

function decreaseNumber5() {
    number -= 5;
    return number;
}
document.querySelector(".decrease5").addEventListener("click", () => {
    document.querySelector("h1").textContent = decreaseNumber5()
})


function getRandomColor() {
    let r1 = Math.floor(Math.random() * 255)
    let r2 = Math.floor(Math.random() * 255)
    let r3 = Math.floor(Math.random() * 255)
    return `rgb(${r1},${r2},${r3})`
}
getRandomColor()

document.querySelector(".changeColor").addEventListener("click", () => {
    document.querySelector("h1").style.color = getRandomColor();
})


let size = 32;

function sizeIncrease() {
    size++;
    return `${size}px`;
}
document.querySelector(".sizeIncrease").addEventListener("click", () => {
    document.querySelector("h1").style.fontSize = sizeIncrease();
})


function sizeDecrease() {
    size--;
    return `${size}px`;
}
document.querySelector(".sizeDecrease").addEventListener("click", () => {
    document.querySelector("h1").style.fontSize = sizeDecrease();
})