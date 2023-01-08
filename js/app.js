const start = document.querySelector(".start");
const res = document.querySelector(".reset");
const box_form = document.querySelector(".box_form");
const hero = document.querySelector(".hero");
const div = document.createElement("div");

function startSite() {
  start.addEventListener("click", () => {
    count++;
    box_form.innerHTML = count;
  });
}

startSite();

function reset() {
  res.addEventListener("click", () => {
    box_form.innerHTML = `${(count = 0)}`;
    hero.innerHTML = "";
  });
}

reset();

let count = "";

start.addEventListener("click", () => {
  count++;
  if (count <= 33) {
    hero.innerHTML = "Subhan Allah";
    console.log("Subhan Allah");
  } else if (count === 34) {
    hero.innerHTML = "Alhamdulillah";
    console.log("Alhamdulillah");
  } else if (count >= 66) {
    hero.innerHTML = "Allahu Akbar";
    console.log("Allahu Akbar");
  } else {
    console.log(404);
  }
});

// hero.innerHTML = `SubhanAllah`;
// hero.innerHTML = `Alhamdulillah`;
// hero.innerHTML = `Alahu Akbar`;
//
// if ((box_form.nodeValue = 0)) {
//   console.log(100);
// } else if ((box_form.nodeValue = 2)) {
//   console.log(3);
// } else {
//   console.log(404);
// }

// hero.textContent = "Hello world2"
