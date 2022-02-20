function getCookie(name) {
    let value = document.cookie;
    let start = value.indexOf(" " + name + "=");
    if (start == -1) {
        start = value.indexOf(name + "=");
    }
    if (start == -1) {
        value = null;
    } else {
        start = value.indexOf("=", start) + 1;
        var end = value.indexOf(";", start);
        if (end == -1) {
            end = value.length;
        }
        value = value.substring(start, end);
    }
    return value;
}

function setCookie(name, value, exdays = 365) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    value = value + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = `${name}=${value}`;
}

window.addEventListener('DOMContentLoaded', (event) => {
    if (getCookie('aviso') === null) {
        document.querySelector(".aviso-cookies").classList.add("avisar");
    } else {
        let valor = parseInt(getCookie('aviso')) + 1;
        setCookie('aviso', valor);
        document.querySelector(".veces").textContent = valor;
    }
    document.querySelector(".primario").addEventListener("click", () => {
        setCookie('aviso', 1);
        document.querySelector(".veces").textContent = 1;
        document.querySelector(".avisar").style.animationPlayState = "running";
    });
    document.querySelector(".close-btn").addEventListener("click", () => {
        document.querySelector(".modal").classList.remove("visible");
    });
    let avisar = document.querySelector(".avisar");
    if (avisar) avisar.addEventListener("animationiteration", (e) => {
        e.target.style.animationPlayState = "paused";
    });
    document.querySelector(".configurar").addEventListener("click", () => {
        document.querySelector(".modal").classList.add("visible");
    });
    document.addEventListener("click", evt => {
        if (evt.target.classList.contains("modal")) document.querySelector(".modal").classList.remove("visible");
    });
    document.querySelector(".veces").addEventListener("click", (evt) => {
        setCookie('aviso', -1, -1);
        evt.target.textContent="-";
    });
});


