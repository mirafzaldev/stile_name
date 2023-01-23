let btn = document.querySelector('input');
btn.oninput = () => {
    document.querySelector('h1').innerHTML = btn.value
};

let bd = document.querySelector('.ss');
    

bd.oninput = () => {
    document.body.style.background = bd.value
};

let cd = document.querySelector('.mm');
    

cd.oninput = () => {
    document.body.classList.style.background('.mm') = cd.value
};


// let body = document.querySelector('html');
// body.addEventListener('click', () => {
//     alert("BEKORDAN BEKORGA XAMMA JOIGA BOSORMANG");
// })
