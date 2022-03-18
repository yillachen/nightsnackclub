import gsap from 'gsap';
import $ from "jquery";

// for image well animations coming in
export function removeClass(targetClass) {
  const imageGroup = document.querySelectorAll(".images-well .targetClass");

  imageGroup.forEach((el) => {
    el.classList.remove(targetClass);
  });
}

// for mouseover hover text
export function projectTooltip() {
  var tooltip = document.querySelectorAll(".project-title");
  document.addEventListener("mousemove", fn, false);

  function fn(e) {
    for (var i = tooltip.length; i--; ) {
      let offset_x = e.offsetX;
      let offset_y = e.offsetY + 45;
      tooltip[i].style.left = offset_x + "px";
      tooltip[i].style.top = offset_y + "px";
    }
  }
}

// for parallax mousehover effect
export function parallax() {
  const palette = document.querySelector('.images-palette');
  const imageWell = document.querySelector('.images-well');

  const sFront = 200;

  palette.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    imageWell.style.transform = `
      translate(
        ${x/sFront}%,
        ${y/sFront}%
      )
    `
  })
}
