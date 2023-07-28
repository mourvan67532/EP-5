function obrigado(){
    alert ("Compra finalizada com sucesso")
}
function lixo(){
    let el = document.getElementById('lixo_java');
    el.style.cssText =
    'display:none;';
}
function lixo2(){
    let el = document.getElementById('lixo_java2');
    el.style.cssText =
    'display:none;';
}
function lixo3(){
    let el = document.getElementById('lixo_java3');
    el.style.cssText =
    'display:none;';
}
function cad(){
    let el = document.getElementById('form_pg');
    el.style.cssText =
    'display:block;';
    let lo = document.getElementById('login');
    lo.style.cssText =
    'display:none;';
}