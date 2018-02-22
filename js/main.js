(() => {
  console.log('fired!');
})();

(function () {
  console.log("SEAF Fired");

  //Vars
  const badge = document.querySelector("#bwbadge") ;
  const back = document.querySelector("#back")
  const checkBox = document.querySelector("#checkBox")
  const danger = document.querySelector("#danger")
  const magnify = document.querySelector("#magnify")
  const mark = document.querySelector("#mark")
  const pause = document.querySelector("#pause")
  const play = document.querySelector("#play")
  const star = document.querySelector("#star")
  const sun = document.querySelector("#sun")
  //Css Animations
  function grow() {

  }

  //Descriptions
  function badgeDes() {
    console.log("A badge");
    badge.classList.add('spin');
  }
  function backDes() {
    console.log("used to go back");
    back.classList.add("move")
  }
  function checkDes() {
    console.log("Checkbox Garyed out when unchecked");
    checkBox.classList.remove('gray')
  }
  function dangerDes() {
    console.log("Danger warning");
    danger.classList.add('spin')
  }
  function magDes() {
    console.log("magnify's selection");
    magnify.classList.add('dshadow');
  }
  function pauseDes() {
    console.log("Pause Animation");
  }
  function playDes() {
    console.log("Play Aniamtion");
  }
  function markDes() {
    console.log("Custom mark as important");
  }
  function starDes() {
    console.log("Favorite Changes Colour when clicked");
  }
  function SunDes() {
    console.log("Toggle background Colour to dark/bright");
  }

  //EventLiseners
  badge.addEventListener('click', badgeDes);
  back.addEventListener('click', backDes);
  checkBox.addEventListener('click', checkDes);
  danger.addEventListener('click', dangerDes);
  magnify.addEventListener('click', magDes);
  play.addEventListener('click', playDes);
  pause.addEventListener('click', pauseDes);
  mark.addEventListener('click', markDes);
  star.addEventListener('click', starDes);
  sun.addEventListener('click', SunDes);

})()
