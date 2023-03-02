// separação das variaveis
const songName = document.getElementById('song-name');
const bandName = document.getElementById('band');
const song = document.getElementById('audio');  
const cover = document.getElementById('cover');  
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const likeButton = document.getElementById('like');
const shuffle = document.getElementById('shuffle');
const repeat = document.getElementById('repeat');
const progressBar = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');

// variavel para designar se a musica esta tocando ou nn
let isPlaying = false;
// variavel para designar se esta no aleatorio
let isShuffle = false;
// variavel para designar se o repetição esta ativado
let repeatON = false;

// variaveis das musicas
const fiveOrfive = {
    songName: '505',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: '505',
    liked: false,
};
const arabella = {
    songName: 'Arabella',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Arabella',
    liked: false,
};
const cryingLightning = {
    songName: 'Crying Lightning',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Crying Lightning',
    liked: false,
};
const cornerstone = {
    songName: 'Cornerstone',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'Cornerstone',
    liked: false,
};
const doIWannaKnow = {
    songName: 'Do I Wanna Know',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Do I Wanna Know',
    liked: false,
};
const doMeAFavor = {
    songName: 'Do Me A Favour',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Do Me A Favour',
    liked: false,
};
const fluorescentAdolescent = {
    songName: 'Fluorescent Adolescent',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Fluorescent Adolescent',
    liked: false,
};
const fourOutOfFive = {
    songName: 'Four Out Of Five',
    artist: 'Arctic Monkeys',
    album: 'tranquilitybase',
    music: 'Four Out Of Five',
    liked: false,
};
const kneeSocks = {
    songName: 'Knee Socks',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'Knee Socks',
    liked: false,
};
const myPropeller = {
    songName: 'My Propeller',
    artist: 'Arctic Monkeys',
    album: 'humbug',
    music: 'My Propeller',
    liked: false,
};
const oldYellowBricks = {
    songName: 'Old Yellow Bricks',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Old Yellow Bricks',
    liked: false,
};
const onlyOnesWhoKnow = {
    songName: 'Only Ones Who Know',
    artist: 'Arctic Monkeys',
    album: 'favoriteworstnightmare',
    music: 'Only Ones Who Know',
    liked: false,
};
const rUMine = {
    songName: 'R U Mine',
    artist: 'Arctic Monkeys',
    album: 'am',
    music: 'R U Mine',
    liked: false,
};
const sculpturesOfAnythingGoes = {
    songName: 'Sculptures Of Anything Goes',
    artist: 'Arctic Monkeys',
    album: 'thecar',
    music: 'Sculptures Of Anything Goes',
    liked: false,
};
const starTreatment = {
    songName: 'Star Treatment',
    artist: 'Arctic Monkeys',
    album: 'tranquilitybase',
    music: 'Star Treatment',
    liked: false,
};
const whydYouOnlyCallMeWhenYoureHigh = {
    songName: "Why'd You Only Call Me When You're High",
    artist: 'Arctic Monkeys',
    album: 'am',
    music: "Why'd You Only Call Me When You're High",
    liked: false,
};


// array para guardar todas a musicas em uma playlist
const playlist = JSON.parse(localStorage.getItem('playlist')) ?? [fiveOrfive,arabella,cryingLightning,cornerstone,doIWannaKnow,doMeAFavor,fluorescentAdolescent,fourOutOfFive,kneeSocks,myPropeller,oldYellowBricks,onlyOnesWhoKnow,rUMine,sculpturesOfAnythingGoes,starTreatment,whydYouOnlyCallMeWhenYoureHigh];
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
    likeButtonRender();
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
// função que atualiza a barra de progresso e o tempo da musica conforme ela passa
function updateProgress() {
    const barWidth = (song.currentTime/song.duration)*100;
    progressBar.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}
// função para avançar a musica
function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)*song.duration;
    song.currentTime = jumpToTime;
}
// função para embaralhar a playlist
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
// função para saber se o aleatorio esta ativo
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
// função para saber se a repetição está ativa
function repeatButton() {
    if(repeatON == false) {
        repeatON = true;
        repeat.classList.add('button-active')
    }
    else {
        repeatON = false;
        repeat.classList.remove('button-active')
    }
}
// função para repetir ou pular a musica quando acabar
function nextOrRepeat() {
    if(repeatON == false) {
        nextSong();
    }
    else {
        playSong();
    }
}

function toHHMMSS(originalNumber) {
     let hours = Math.floor(originalNumber/3600);
     let minutes = Math.floor((originalNumber - hours * 3600)/60);
     let seconds = Math.floor(originalNumber - hours * 3600 - minutes * 60);

     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// função que atualiza o tempo total da musica
function totalSongTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonRender() {
    if (sortedPlaylist[index].liked == true) {
        likeButton.querySelector('.bi').classList.remove('bi-heart');
        likeButton.querySelector('.bi').classList.add('bi-heart-fill');
        likeButton.classList.add('button-active');
    }
    else {
        likeButton.querySelector('.bi').classList.add('bi-heart');
        likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
        likeButton.classList.remove('button-active');
    }
}

function likeButtonClicked() {
    if(sortedPlaylist[index].liked == false) {
        sortedPlaylist[index].liked = true;
    }
    else {
        sortedPlaylist[index].liked = false;
    }
    likeButtonRender();
    localStorage.setItem('playlist', JSON.stringify(playlist));
}


loadSong();

play.addEventListener('click', playPause);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextOrRepeat);
song.addEventListener('loadedmetadata', totalSongTime);
progressContainer.addEventListener('click', jumpTo);
shuffle.addEventListener('click', shuffleButton);
repeat.addEventListener('click', repeatButton);
likeButton.addEventListener('click', likeButtonClicked);
