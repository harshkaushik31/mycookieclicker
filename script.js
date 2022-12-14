var count_cookie = 0;
var count_granny = 0;
var count_baker = 0;
var count_factory = 0;
var cookie_img = document.querySelector('.cookie-img');
var cookie_disp = document.querySelector('#count-of-cookie');
var granny_disp = document.querySelector('#count-of-grandma');
var baker_disp = document.querySelector('#count-of-baker');
var factory_disp = document.querySelector('#count-of-factory');
var inc_count = document.querySelectorAll('.inc-elem');
var inst = document.querySelector('.master-inst');
var toggle = document.querySelector('.toggle-master')
var btn = document.querySelector('.audio-stop');

// importing sound effect
var background = new Audio('background.mp3');
var point = new Audio('point.wav');
var beep = new Audio('beep.wav');

// playing backgound
function audioplay(){
    background.play();
    background.loop = true;
    // console.log('playing-bgm');
}
var stop_audio = setInterval(audioplay,1000);

// stoping audio
btn.addEventListener('click',()=>{
    background.pause();
    clearInterval(stop_audio);
});

//dev mode
var dev_mode = false;
if(dev_mode==true){
    count_cookie = 9990;
};


//on load
window.onload = () => {
    console.log('page is fully loaded'); 
};

// Event Listener on Cookie Img
cookie_img.addEventListener('click',()=>{
    count_cookie++;
    beep.play();
});

// Event Listner On All Images
// cost of granny - 100
// cost of baker - 500
// cost of factory - 1000

inc_count.forEach(function(inc_count){
    inc_count.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('grandma-img')){
            if(count_cookie>=100){
                count_cookie-=100;
                count_granny++;
                console.log('number of granny',count_granny);
                point.play();
            }
            // else{
            //     alert('You do not have enough cookies!');
            // }
            console.log('grandma clicked')
        }
        else if(styles.contains('baker-img')){
            if(count_cookie>=200){
                count_cookie-=200;
                count_baker++;
                console.log('number of baker',count_baker);
                point.play();
            }
            // else{
            //     alert('You do not have enough cookies!');
            // }
        }
        else{
            if(count_cookie>=500){
                count_cookie-=500;
                count_factory++;
                console.log('number of factory',count_factory);
                point.play();
            }
            // else{
            //     alert('You do not have enough cookies!');
            // }
        }
    })
});


// Increasing Functions

// Granny adds 1 cookie every 10s
setInterval(function Granny(){
    count_cookie=count_cookie+count_granny*1;
},10000);

// Baker adds 1 cookie every 5s
setInterval(function Baker(){
    count_cookie=count_cookie+count_baker*1;
},5000);

// Factory adds 1 cookie every 1s
setInterval(function Factory(){
    count_cookie=count_cookie+count_factory*1;
},1000);


// Displaying the score
setInterval(function(){
    cookie_disp.innerHTML = count_cookie;
    granny_disp.innerHTML = count_granny;
    baker_disp.innerHTML = count_baker;
    factory_disp.innerHTML = count_factory;
    if(count_cookie==10000){
        modal.classList.add('open-modal');
    }
},100);

// JS for Instructions
toggle.addEventListener('click',()=>{
    inst.classList.toggle('show-master-inst');
});

var modal = document.querySelector('.modal-overlay');
var closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click',()=>{
    closeBtn.parentElement.parentElement.remove('open-modal');
    console.log("Clicked Here")
});