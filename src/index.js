
document.getElementById("cross").addEventListener("click",()=>{
    list_c=document.querySelectorAll("#cross .xyz");
    list_c[0].classList.toggle("cross_f");
    list_c[1].classList.toggle("cross_m");
    list_c[2].classList.toggle("cross_l");
    //after click effect
    document.querySelector(".a_c").classList.toggle("after_click")
    document.querySelector(".b_a_c").classList.toggle("b_after_click")
    
    console.log(window.innerWidth)
    
    document.querySelector(".clicked").classList.toggle("invisible")
})