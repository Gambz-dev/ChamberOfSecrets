var bar = document.querySelector(".loaderBar"),
    barCtn = document.querySelector(".loaderCtn"),
    next = document.querySelector(".next"),
    svg = document.querySelector(".svg"),
    tri = document.querySelectorAll(".triangle"),
    bg = document.querySelector(".bg");
    left = document.querySelector(".left"),
    right = document.querySelector(".right");

bar.style.width = '100%';
bar.style.boxShadow = "0px 0px 14px 0px rgba(247,255,0,1)";
bar.style.opacity = "1";

setTimeout(() => {
  barCtn.style.display = "none";
  next.style.display = "block";
}, 10000);


next.addEventListener("click", ()=> {
  bg.style.display = "block";
  svg.style.opacity = "0";
  next.style.display = "none";

  left.classList.add("leftOpen");
  right.style.right = "0";

  setTimeout(() => {
    animateA();
  }, 1000);
}) ;


function animateA() {
  var textWrapper = document.querySelector('.a');
  textWrapper.style.display = "block"
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.a .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.a',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    setTimeout(() => {
      animateB();
    }, 2600);
}


function animateB() {
  var textWrapper = document.querySelector('.b');
  textWrapper.style.display = "block"
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letterB'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.b .letterB',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.b',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    setTimeout(() => {
      animateC();
    }, 2600);
}

function animateC() {
  var textWrapper = document.querySelector('.c');
  textWrapper.style.display = "block"
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letterC'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '.c .letterC',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.c',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    setTimeout(() => {
      setLogo();
    }, 3200);
}

function setLogo() {
  var logo = document.querySelector(".logopng");
  logo.classList.add("logopngActive")
}