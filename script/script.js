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
const arabella = {
    songName: 'Arabella',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Arabella'
};
const doIWannaKnow = {
    songName: 'Do I Wanna Know',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Do I Wanna Know'
};
const fireside = {
    songName: 'Fireside',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Fireside'
};
const iWantItAll = {
    songName: 'I Want it All',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'I Want it All'
};
const kneeSocks = {
    songName: 'Knee Socks',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Knee Socks'
};
const madSounds = {
    songName: 'Mad Sounds',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Mad Sounds'
};
const no1PartyAnthem = {
    songName: 'No 1 Party Anthem',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'No 1 Party Anthem'
};
const oneForTheRoad = {
    songName: 'One For The Road',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'One For The Road'
};
const rUMine = {
    songName: 'R U Mine',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'R U Mine'
};
const snapOutOfIt = {
    songName: 'Snap Out of It',
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: 'Snap Out of It'
};
const whydYouOnlyCallMeWhenYoureHigh = {
    songName: "Why'd You Only Call Me When You're High",
    artist: 'Arctic Monkeys',
    cover: 'AMAlbum',
    music: "Why'd You Only Call Me When You're High"
};


// array para guardar todas a musicas em uma playlist
const playlist = [arabella, doIWannaKnow, fireside, iWantItAll, kneeSocks, madSounds, no1PartyAnthem, oneForTheRoad, rUMine, snapOutOfIt, whydYouOnlyCallMeWhenYoureHigh];
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
    song.src = `assets/songs/${playlist[index].music}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
};

function previousSong() {
    index -= 1;
}


loadSong();

play.addEventListener('click', playPause);
previous.addEventListener('click', )