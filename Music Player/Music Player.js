let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrl-icon");
let backWardButton = document.getElementById("backwardbutton");
let forwardButton = document.getElementById("forwardbutton");

song.onloadedmetadata = function(){
    progress.max = song.ondurationchange;
    progress.value = song.currentTime;
}


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },10);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
}
function backWard(){
    if(!song.paused){
        var currentTime = song.currentTime;
         var newTime = currentTime - 10;

         if(newTime < 0){
            newTime = 0;
         }
        song.currentTime = newTime; 
        progress.value = newTime;
    }
}
function forWard(){
    if(!song.paused){
        var currentTime = song.currentTime;
        var newTime = currentTime + 10;

        if(newTime < 0){
            newTime = 0;
        }

        song.currentTime = newTime;
        progress.value = newTime;
    }
}
