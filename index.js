const weezer = document.querySelector('.weezer');
const newAudio = new Audio('/sounds/lol.mp3');


weezer.onmouseover = ()=>{
  console.log('hell0')
  newAudio.play();
};
weezer.onmouseout = ()=>{
  console.log('goodbye');
  newAudio.pause();
};