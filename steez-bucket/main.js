document.querySelector('button').addEventListener('click', press)




function press() {

  const clothes = document.getElementById('style').value

if (clothes === 'chill' || clothes === 'casual' || clothes === 'relaxed' ){

}

  // document.getElementById('img')

}



var textWrapper = document.querySelector('.anima');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anima .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.anima .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
