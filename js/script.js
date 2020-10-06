let render = document.querySelector("#render");

setInterval(atualiza, 1000);
let segundo = 00
function atualiza(){
    let segundosSistema = new Date().getSeconds();
    let minutosSistema = new Date().getMinutes();
    let horasSistema = new Date().getHours();
    if (segundo > 58) {
        segundo = 00;
    }else{
        render.textContent = zeroEsquerda(horasSistema, 2)+':'+zeroEsquerda(minutosSistema, 2)+':'+zeroEsquerda(segundosSistema, 2)
        //render.textContent = zeroEsquerda(hora, 2)+':'+zeroEsquerda(minuto, 2)+':'+zeroEsquerda(segundo, 2)
        segundo += 1;
    }
}

function zeroEsquerda(num, comprimento) {
    num = num.toString();
    while(num.length < comprimento)
        num = "0" + num;
    return num;
}