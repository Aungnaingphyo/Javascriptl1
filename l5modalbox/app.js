
var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
    getmodal.style.display="block";
});

getbtnclose.addEventListener('click',function(){
    getmodal.style.display="none";
});

window.onclick = function(e){
    
    if(e.target === getmodal){
        getmodal.style.display = 'none'
    }

}

var getde = document.documentElement

getbtnfullscreen.addEventListener('click',function(){

    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    localStorage.setItem('fscreen','1');


    getbtnclosescreen.style.display = "inline-block"

    fullscreen();


});





getbtnclosescreen.addEventListener('click',function(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    console.log('hi');

    getbtnclosescreen.style.display = "none";

    localStorage.removeItem('fscreen');

    localStorage.setItem('fscreen','1');

});

function fullscreen(){
    var ls = localStorage.getItem('fscreen');
    if(ls == '1'){
        // console.log('hi');
        document.addEventListener('keydown',function(e){
            e.preventDefault();
        }); 
    }

}
