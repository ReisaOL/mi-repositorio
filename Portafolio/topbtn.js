function topbotom(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var topbtn = document.getElementById('topbtn');

        if(scroll > pxPantalla){
            topbtn.style.right = 5 + "px";
        } else {
            topbtn.style.right = -80 + "px";
        }
    })
}

topbotom(500);