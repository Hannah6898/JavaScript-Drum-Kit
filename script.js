function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
  btn.classList.add("playing");
  if (!audio) retun;
  audio.currentTime = 0;
  audio.play();
  console.log(btn);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const btn = document.querySelectorAll("button");
btn.forEach((btn) => btn.addEventListener("transitionend", removeTransition));
document.addEventListener("keydown", playSound);
