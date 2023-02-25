const songName = document.getElementById('song-name');
const bandName = document.getElementById('band');
const song = document.getElementById('audio');  
const cover = document.getElementById('cover');  
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

//variavel para designar se a musica esta tocando ou nn
let isPlaying = false;

// variaveis das musicas
const fiveOrfive = {
    songName: '505',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: '505'
};
const arabella = {
    songName: 'Arabella',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Arabella'
};
const cornerstone = {
    songName: 'Cornerstone',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Cornerstone'
};
const cryingLightning = {
    songName: 'Crying Lightning',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Crying Lightning'
};
const doIWannaKnow = {
    songName: 'Do I Wanna Know',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Do I Wanna Know'
};
const doMeAFavor = {
    songName: 'Do Me A Favor',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Do Me A Favor'
};
const fluorescentAdolescent = {
    songName: 'Fluorescent Adolescent',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Fluorescent Adolescent'
};
const fourOutOfFive = {
    songName: 'Four Out Of Five',
    artist: 'Arctic Monkeys',
    album: 'tranquilitybase',
    music: 'Four Out Of Five'
};
const kneeSocks = {
    songName: 'Knee Socks',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Knee Socks'
};
const myPropeller = {
    songName: 'My Propeller',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'My Propeller'
};
const oldYellowBricks = {
    songName: 'Old Yellow Bricks',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Old Yellow Bricks'
};
const onlyOnesWhoKnow = {
    songName: 'Only Ones Who Know',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Only Ones Who Know'
};
const rUMine = {
    songName: 'R U Mine',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'R U Mine'
};
const sculpturesOfAnythingGoes = {
    songName: 'Sculptures Of Anything Goes',
    artist: 'Arctic Monkeys',
    album: 'thecar',
    music: 'Sculptures Of Anything Goes'
};
const starTreatment = {
    songName: 'Star Treatment',
    artist: 'Arctic Monkeys',
    album: 'tranquilitybase',
    music: 'Star Treatment'
};
const whydYouOnlyCallMeWhenYoureHigh = {
    songName: "Why'd You Only Call Me When You're High",
    artist: 'Arctic Monkeys',
    album: 'am',
    music: "Why'd You Only Call Me When You're High"
};


// array para guardar todas a musicas em uma playlist
const playlist = [fiveOrfive,arabella,cornerstone,cryingLightning,doIWannaKnow,doMeAFavor,fluorescentAdolescent,fourOutOfFive,kneeSocks,myPropeller,oldYellowBricks,onlyOnesWhoKnow,rUMine,sculpturesOfAnythingGoes,starTreatment,whydYouOnlyCallMeWhenYoureHigh];
let index = 0;



// função para dar play na musica e trocar os icones
function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

// função para pausar a musica e trocar os icones
function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

// função de dar play e pausar a musica
function playPause(){
    if(isPlaying == true){
        pauseSong();
    }
    else {
        playSong();
    }
}

function loadSong(){
    cover.src = `assets/images/${playlist[index].album}.webp`;
    song.src = `assets/songs/${playlist[index].music}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

// função para voltar a musica
function previousSong() {
    if (index == 0) {
        index = playlist.length -1;
    }
    else {
        index -= 1;
    }
    loadSong();
    playSong();
}
// função para avançar a musica
function nextSong() {
    if (index == playlist.length -1) {
        index = 0;
    }
    else {
        index += 1;
    }
    loadSong();
    playSong();
}

loadSong();

play.addEventListener('click', playPause);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);