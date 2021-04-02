let play = document.getElementById("play")
let music = document.getElementById("music")
let img = document.getElementById("image")
let title = document.getElementById("title")
let previous = document.getElementById("previous")
let next= document.getElementById("next")

let songs =[
    {
        name:"song1",
        title:"Girl I Need You",
    },
    {
        name:"song2",
        title:"Khwab",
    },
    {
        name:"song3",
        title:"Kaun Tujhe",
    }
];




play.onclick = function(){


    
    if(music.paused){
        play.className = "fas fa-pause"
        music.play()
        img.classList.add("anim")
    }else{
        music.pause()
        play.className = "fas fa-play"
        img.classList.remove("anim")
    }

    
}


// load songs 



let loadSong = function(songs){
    title.textContent = songs.title;
    music.src = `music/${songs.name}.mp3`;
    img.src =`images/${songs.name}.jpg`;
    
}
songIndex = 0;
// loadSong(songs[1]);

let nextSong = function(){
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    if(music.play){
        play.className = "fas fa-pause"
        music.play()
        img.classList.add("anim")
    }
}

let previousSong = function(){
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    if(music.play){
        play.className = "fas fa-pause"
        music.play()
        img.classList.add("anim")
    }
    
}

next.addEventListener("click" , nextSong)
previous.addEventListener("click" , previousSong)