export function removeClass(targetClass) {
  const imageGroup = document.querySelectorAll(".images-well .targetClass");

  imageGroup.forEach((el) => {
    el.classList.remove(targetClass);
  });
}

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
