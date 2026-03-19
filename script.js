const plank = document.querySelector(".plank");
const objects = [];

plank.addEventListener("click", function (event) {
  const rect = plank.getBoundingClientRect(); // plankin ekranin solundan uzakligi(rect.left)
  const clickX = event.clientX - rect.left; // plankin en solundan itibaren ne kadar uzaga tikladigi
  const distanceFromCenter = clickX - rect.width / 2; // formul icin gerekli merkezden ne kadar uzaga tikladigi
  const weight = Math.floor(Math.random() * 10) + 1;

  objects.push({
    weight: weight,
    distance: distanceFromCenter, // negatif = sol, pozitif = sag
  });
  updateSeesaw();
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

function updateSeesaw() {
  const { leftTorque, rightTorque } = calculateTorque();
  const angle = Math.max(-30, Math.min(30, (rightTorque - leftTorque) / 10));
  plank.style.transform = `rotate(${angle}deg)`;
}
