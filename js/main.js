(() => {
  console.log('fired!');
})();

(function () {
  console.log("SEAF Fired");

  //Vars
  let badge = document.querySelector("#bwbadge") ;
  let back = document.querySelector("#back")
  let checkBox = document.querySelector("#checkBox")
  let danger = document.querySelector("#danger")
  let magnify = document.querySelector("#magnify")
  let mark = document.querySelector("#mark")
  let pause = document.querySelector("#pause")
  let play = document.querySelector("#play")
  let star = document.querySelector("#star")
  let sun = document.querySelector("#sun")
  //Css Animations

  //Descriptions
  function badgeDes() {
    console.log("A badge");
    this.classList.toggle('spin');
  }
  function backDes() {
    console.log("used to go back");
    this.classList.toggle("move");
  }
  function checkDes() {
    console.log("Checkbox Garyed out when unchecked");
    this.classList.toggle('grayout');
  }
  function dangerDes() {
    console.log("Danger warning");
    this.classList.toggle('grow');
  }
  function magDes() {
    console.log("magnify's selection");
    this.classList.toggle('dshadow');
  }
  function pauseDes() {
    console.log("Pause Animation");
    this.classList.toggle("invert");
  }
  function playDes() {
    console.log("Play Aniamtion");
    this.classList.toggle("invert");
  }
  function markDes() {
    console.log("Custom mark as important");
    this.classList.toggle("invert");
  }
  function starDes() {
    console.log("Favorite Changes Colour when clicked");
    this.classList.toggle("grayout");
  }
  function SunDes() {
    console.log("Toggle background Colour to dark/bright");
    this.classList.toggle("grayout");
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
