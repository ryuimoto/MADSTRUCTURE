
let sliderThreeInterval = "";
window.onload = function() {
    sliderImgSizeSet();

    sliderThreeInterval = setInterval(sliderChangeThree , 4000 , 0);

    let buttonsThree = document.querySelector(".button-cont-three").children;
    let button = "";
    for (let targetCount = 0; targetCount < buttonsThree.length; targetCount++) {
        if(buttonsThree[targetCount].classList.contains("button-left-three")===true){
            button = 0;
        }else{
            button = 1;
        }
        buttonsThree[targetCount].addEventListener("click",{judgmentNumber :1, buttonPlace :button, handleEvent: sliderChangeThree});
    }
}

function sliderImgSizeSet(){
    let contWidth = document.querySelector(".cont-three").clientWidth;
    let items = document.querySelectorAll(".items-three");
    let wrap = document.querySelector(".wrap-three");

    wrap.style.width = contWidth * items.length + "px";
}

function sliderChangeThree(judgment){

    let contWidth = document.querySelector(".cont-three").clientWidth;
    let wrap = document.querySelector(".wrap-three");
    let items = document.querySelectorAll(".items-three");
    let itemShow = document.querySelector(".items-three.show");
    let itemNumber = Number(itemShow.getAttribute("data-item-three-number"));
    let increaseOrDecrease = "";

    judgment = this.judgmentNumber;

    if(judgment === 1){
        clearInterval(sliderThreeInterval);

        if(this.buttonPlace === 0){
            if(itemNumber === 0){
                sliderThreeInterval = setInterval(sliderChangeThree , 3000 , 0);
                return;
            }else{
                increaseOrDecrease = -1;
            }
        }else{
            if(itemNumber === (items.length-1)){
                sliderThreeInterval = setInterval(sliderChangeThree , 3000 , 0);
                return;
            }else{
                increaseOrDecrease = +1;
            }
        }   
        itemShow.classList.remove("show");
        items[itemNumber + increaseOrDecrease].classList.add("show");
        wrap.style.right = contWidth * (itemNumber + increaseOrDecrease) + "px";

        sliderThreeInterval = setInterval(sliderChangeThree , 3000 , 0);

    }else{

        itemShow.classList.remove("show");
        if(itemNumber === (items.length-1)){
            items[0].classList.add("show");
            wrap.style.right = contWidth * (0) + "px";
        }else{
            items[itemNumber+1].classList.add("show");
            wrap.style.right = contWidth * (itemNumber+1) + "px";
        }

    }
}
 // JavaScript Document