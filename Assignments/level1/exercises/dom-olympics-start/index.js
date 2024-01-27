var headerBox = document.getElementById("header")
headerBox.style.fontSize = "30px"
headerBox.classList.add("header")
headerBox.textContent = "JavaScript Made This!!"

const span1 = document.createElement("span")
span1.textContent = "Kayla "
span1.classList.add("name")
span1.style.fontSize = "20px"

const span2 = document.createElement("span")
span2.textContent = "wrote the JavaScript"
span2.style.fontSize = "20px" 

const div1 = document.createElement("div")
div1.append(span1, span2)
headerBox.append(div1)

var txtTopLeft = document.getElementById("left-top")
txtTopLeft.textContent = "How are you today?"
var txtTopRight = document.getElementById("right-top")
txtTopRight.textContent = "Doing good! How are you?"
var txtBottomLeft = document.getElementById("left-bottom")
txtBottomLeft.textContent = "I'm good! Hope you have a wonderful day today!"
var txtBottomRight = document.getElementById("right-bottom")
txtBottomRight.textContent = "You too :)"

document.getElementById('clear-button').addEventListener(
    "click",
    () => {
        txtTopLeft.textContent = "";
        txtBottomLeft.textContent = "";
        txtTopRight.textContent = "";
        txtBottomRight.textContent = "";
})