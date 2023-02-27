// separação das variaveis
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band');
const song = document.getElementById('audio');  
const cover = document.getElementById('cover');  
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const shuffle = document.getElementById('shuffle');
const repeat = document.getElementById('repeat');
const progressBar = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');

// variavel para designar se a musica esta tocando ou nn
let isPlaying = false;
// variavel para designar se esta no aleatorio
let isShuffle = false;

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
const cryingLightning = {
    songName: 'Crying Lightning',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Crying Lightning'
};
const cornerstone = {
    songName: 'Cornerstone',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Cornerstone'
};
const doIWannaKnow = {
    songName: 'Do I Wanna Know',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Do I Wanna Know'
};
const doMeAFavor = {
    songName: 'Do Me A Favour',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Do Me A Favour'
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
const playlist = [fiveOrfive,arabella,cryingLightning,cornerstone,doIWannaKnow,doMeAFavor,fluorescentAdolescent,fourOutOfFive,kneeSocks,myPropeller,oldYellowBricks,onlyOnesWhoKnow,rUMine,sculpturesOfAnythingGoes,starTreatment,whydYouOnlyCallMeWhenYoureHigh];
let sortedPlaylist = [...playlist];
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

// função para carregar as infos da musica como capa, musica, nome da musica e nome do artista
function loadSong(){
    cover.src = `assets/images/${sortedPlaylist[index].album}.webp`;
    song.src = `assets/songs/${sortedPlaylist[index].music}.mp3`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
}

// função para voltar a musica
function previousSong() {
    if (index == 0) {
        index = sortedPlaylist.length -1;
    }
    else {
        index -= 1;
    }
    loadSong();
    playSong();
}
// função para avançar a musica
function nextSong() {
    if (index == sortedPlaylist.length -1) {
        index = 0;
    }
    else {
        index += 1;
    }
    loadSong();
    playSong();
}
// função que atualiza a barra de progresso conforme a musica passa
function updateProgressBar() {
    const barWidth = (song.currentTime/song.duration)*100;
    progressBar.style.setProperty('--progress', `${barWidth}%`)
}
// função para avançar a musica
function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)*song.duration;
    song.currentTime = jumpToTime;
}

function shuffleArray(preShuffleArray) {
    const size = preShuffleArray.length;
    let currentIndex = size - 1;
    while(currentIndex > 0){
        let randomIndex = Math.floor(Math.random()*size);
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function shuffleButton() {
    if(isShuffle == false){
        isShuffle = true;
        shuffleArray(sortedPlaylist);
        shuffle.classList.add('button-active');
    }
    else{
        isShuffle = false;
        sortedPlaylist = [...playlist];
        shuffle.classList.remove('button-active');
    }
}

loadSong();

play.addEventListener('click', playPause);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);
shuffle.addEventListener('click', shuffleButton);
