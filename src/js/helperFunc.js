import $ from "jquery";

// for image well animations coming in
export function removeClass(targetClass) {
  const imageGroup = document.querySelectorAll(".images-well .targetClass");

  for (var i = 0; i < imageGroup.length; i++) {
    var toggleItemMove = getToggleItemMove(i);
    setTimeout(toggleItemMove, i * 100);
  }

  function getToggleItemMove(i) {
    var item = imageGroup[i];
    return function () {
      item.classList.remove(targetClass);
    };
  }
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
  const palette = document.querySelector(".images-palette");
  const imageWell = document.querySelector(".images-well");

  const sFront = 200;

  palette.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    imageWell.style.transform = `
      translate(
        ${x / sFront}%,
        ${y / sFront}%
      )
    `;
  });
}

// delayed click for mobile
export function loadpage() {
  $(document).ready(function () {
    $(".delay").click(function (e) {
      if (window.innerWidth < 800) {
        e.preventDefault();
        var $a = $(this).addClass("clicked");
        setTimeout(function () {
          window.open($a.attr("href"), "_blank");
        }, 600);
      }
      return;
    });
  });
}
