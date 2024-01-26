
let newBtn = document.createElement("button");
newBtn.innerText = "Submit";
console.log(newBtn);

let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.after(newBtn);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<b><i><u>Hello How are you?</u></i></b>";
document.querySelector("body").prepend(newHeading);

let para1 = document.createElement("p");
para1.innerHTML = "Behind Javascript";
document.querySelector("body");
para1.after(newBtn);