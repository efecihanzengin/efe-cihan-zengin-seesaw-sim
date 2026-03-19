const plank = document.querySelector(".plank");

plank.addEventListener("click", function (event) {
  const rect = plank.getBoundingClientRect(); // plankin ekranin solundan uzakligi(rect.left)
  const clickX = event.clientX - rect.left; // plankin en solundan itibaren ne kadar uzaga tikladigi
  const distanceFromCenter = clickX - rect.width / 2; // formul icin gerekli merkezden ne kadar uzaga tikladigi
  console.log(rect);
  console.log(clickX);
  console.log(distanceFromCenter);
});
