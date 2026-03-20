const plank = document.querySelector(".plank");
const objects = [];

plank.addEventListener("click", function (event) {
  const click = event.offsetX; // plankin solundan uzakligi
  const distanceFromCenter = click - 200; // formul icin gerekli merkezden ne kadar uzaga tikladigi
  const weight = Math.floor(Math.random() * 10) + 1;

  objects.push({
    weight: weight,
    distance: distanceFromCenter, // negatif = sol, pozitif = sag
  });

  createNewWeightObject(click, weight);
  updateSeesaw();
});

function calculateTorque() {
  let leftTorque = 0;
  let rightTorque = 0;

  let leftWeightTotal = 0;
  let rightWeightTotal = 0;

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].distance < 0) {
      leftTorque += objects[i].weight * Math.abs(objects[i].distance);
      leftWeightTotal += objects[i].weight;
    } else if (objects[i].distance > 0) {
      rightTorque += objects[i].weight * objects[i].distance;
      rightWeightTotal += objects[i].weight;
    }
  }

  return { leftTorque, rightTorque, leftWeightTotal, rightWeightTotal };
}

function updateSeesaw() {
  const { leftTorque, rightTorque, leftWeightTotal, rightWeightTotal } =
    calculateTorque();
  const angle = Math.max(-30, Math.min(30, (rightTorque - leftTorque) / 10));
  plank.style.transform = `rotate(${angle}deg)`;

  document.getElementById("left-weight").innerText =
    `Left: ${leftWeightTotal} kg`;
  document.getElementById("right-weight").innerText =
    `Right: ${rightWeightTotal} kg`;
}

function createNewWeightObject(click, weight) {
  const newObject = document.createElement("div");
  newObject.classList.add("object");

  newObject.textContent = weight;

  newObject.style.left = click - 10 + "px";
  plank.appendChild(newObject);
}
