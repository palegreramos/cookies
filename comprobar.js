function getCookie(c_name){
    let c_value = document.cookie;
    let c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = c_value.substring(c_start,c_end);
    }
    return c_value;
}
 
function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=value + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
 

function PonerCookie(){
    setCookie('aviso','1',365);
}


window.addEventListener('DOMContentLoaded', (event) => {
    if(getCookie('aviso')!="1"){
        document.querySelector(".aviso-cookies").classList.add("avisar");

    }
        document.querySelector(".primario").addEventListener("click",()=>{
            PonerCookie();
            document.querySelector(".avisar").style.animationPlayState="running";
            
            
    });
    document.querySelector(".close-btn").addEventListener("click",()=>{
        document.querySelector(".modal").classList.remove("visible");
    });
    document.querySelector(".avisar").addEventListener("animationiteration", (e)=>{
        e.target.style.animationPlayState="paused";
    });
    document.querySelector(".configurar").addEventListener("click",()=>{
        document.querySelector(".modal").classList.add("visible");
    });
    document.addEventListener("click",(evt)=>{
       if (evt.target.classList.has("modal")) document.querySelector(".modal").classList.remove("visible");
    });
});


