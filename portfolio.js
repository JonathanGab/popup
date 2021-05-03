const secondAvatar = document.querySelector(".avatar");

secondAvatar.addEventListener('click', function () {
    secondAvatar.src = "image/avatar.svg"
})

const newName = document.querySelector("#name")
const newbtn = document.querySelector(".button")
const btn = document.createElement("button");
const textInbtn = document.createTextNode("Modify Text And Color");

btn.appendChild(textInbtn);
newbtn.appendChild(btn);
btn.style.background = "transparent"
btn.style.width = "150px"
btn.style.height = "50px"
btn.style.borderColor = "white"
btn.style.color = "white"
btn.style.borderRadius = "10px"
btn.style.cursor = "pointer"

btn.addEventListener('click', function () {
    const newBg = prompt("choose your color");
    const yourName = prompt("What's your name?");
    newName.innerHTML = `${yourName}`
    newName.style.color = "white"

    const newColor = document.querySelectorAll("div.pink-bg")
    for (let c = 0; c < newColor.length; c++) {
        newColor[c].style.backgroundColor = `${newBg}`
    }

    const textColor = document.querySelectorAll("h2.pink-text")
    for (let t = 0; t < textColor.length; t++) {
        textColor[t].style.color = `${newBg}`
    };

    const newLink = document.querySelectorAll("a")
    for (let l = 0; l < newLink.length; l++) {
        newLink[l].classList.add("purple-text")
        newLink[l].style.color = `${newBg}`
    }
})
//-----POPUP JS-----///

const popup = document.getElementById('popup');
let popOnceTime = true;
window.addEventListener('scroll', function () {



    let scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight) * 100
    console.log(scrollValue)
    function popOnce() {
        if (scrollValue > 80 && popOnceTime) {
            setTimeout(() => {
                popup.style.opacity = 1;
                popup.style.transform = 'none'
            }, 2000)
            popOnceTime = false;
        }
    }
    popOnce()
})

popup.addEventListener('click', function () {
    popup.style.opacity = 0;
    popup.style.transform = "translateY(500px)"
})