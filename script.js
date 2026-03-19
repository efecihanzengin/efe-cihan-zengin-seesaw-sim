const plank = document.querySelector(".plank");

plank.addEventListener("click", function (event) {
  const rect = plank.getBoundingClientRect(); // plankin ekranin solundan uzakligi(rect.left)
  const clickX = event.clientX - rect.left; // plankin en solundan itibaren ne kadar uzaga tikladigi
  const distanceFromCenter = clickX - rect.width / 2; // formul icin gerekli merkezden ne kadar uzaga tikladigi
  console.log(rect);
  console.log(clickX);
  console.log(distanceFromCenter);
});

const objects = [];

objects.push({
  weight: weight,
  distance: distanceFromCenter, // negatif = sol, pozitif = sag
});

function calculateTorque() {
  let leftTorque = 0;
  let rightTorque = 0;

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].distance < 0) {
      leftTorque += objects[i].weight * Math.abs(objects[i].distance);
    } else if (objects[i].distance > 0) {
      rightTorque += objects[i].weight * objects[i].distance;
    }
  }

  return { leftTorque, rightTorque };
}
