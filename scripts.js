const $arrows=document.getElementById("arrows");
const $slider=document.getElementById("slider");
/*====fuctions===== */
const showSlider=(direction)=>{
    if(direction==="right"  || direction==="ArrowRight"){
        $slider.classList.add("container-slider---show");
    }else if (direction==="left"  || direction==="ArrowLeft"){
        $slider.classList.remove("container-slider---show");

    }
}

/*====events===== */
$arrows.addEventListener("click",(e)=>showSlider(e.target.dataset.direction))
addEventListener("keyup",(e)=>showSlider(e.key))