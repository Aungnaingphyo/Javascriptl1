var getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
    // console.log('scroll is working');

    // st    
    // ph
    // ch

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);
    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);
    var getclinetheight = document.documentElement.clientHeight;
    // console.log(getclinetheight);

    var calheight = getscrollheight - getclinetheight;
    // console.log(calheight);

    var final = Math.round((getscrolltop * 100) / calheight);
    // console.log(final);

    getprogressbar.style.width =`${final}%`;

}

document.getElementById('print-btn').addEventListener('click',function(){
    window.print();
});