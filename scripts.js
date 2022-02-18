window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector(".cookie-setting").addEventListener("click",()=>{
        document.querySelector(".modal").classList.add("visible");
    });
    document.querySelector(".close-btn").addEventListener("click",()=>{
        document.querySelector(".modal").classList.remove("visible");
    });
    // document.addEventListener("click",(evt)=>{
    //     if (evt.target.classList.has("modal")) document.querySelector(".modal").classList.remove("visible");
    // });
});