let btnLogin = document.querySelector('.div-a-login');
let btnCadastrar = document.querySelector('.div-a-cadastrar');
let contentLogin = document.querySelector('.form-login');
let contentCadastrar = document.querySelector('.form-cadastrar');
let content0 = document.querySelector('.content-0');
let content1 = document.querySelector('.content-1');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    
    contentCadastrar.style.transform = "translateY(0)";
    content1.style.transform = "translateX(100%)";
    contentLogin.style.transform = "translateX(-100%)";
    content0.style.transform = "translateX(0)";
});

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    contentCadastrar.style.transform = "translateX(100%)";
    content1.style.transform = "translateX(0)";
    contentLogin.style.transform = "translateX(0)";
    content0.style.transform = "translateX(-100%)";
});