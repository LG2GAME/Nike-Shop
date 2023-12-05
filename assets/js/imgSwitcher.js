const imgArr = [
    document.getElementById("imgSw"),
    document.getElementById("imgSw2")
];

for(let i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener("click", () => {
        imgArr[i].classList.toggle("clicked")
    });
}