function getCookie(name){
    let value = document.cookie;
    let start = value.indexOf(" " + name + "=");
    if (start == -1){
        start = value.indexOf(name + "=");
    }
    if (start == -1){
        value = null;
    }else{
        start = value.indexOf("=", start) + 1;
        var end = value.indexOf(";", start);
        if (end == -1){
            end = value.length;
        }
        value = value.substring(start,end);
    }
    return value;
}
 
function setCookie(name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var value=value + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=`${name}=${value}`;
}
 

function ponerCookie(){
    setCookie('aviso','1',365);
}


window.addEventListener('DOMContentLoaded', (event) => {
    if(getCookie('aviso')!="1"){
        document.querySelector(".aviso-cookies").classList.add("avisar");

    }
        document.querySelector(".primario").addEventListener("click",()=>{
            ponerCookie();
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


