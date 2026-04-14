/* --geo loction (once)----*/
let geoLoaded = false;

if (navigator.geolocation && !geoLoaded) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      geoLoaded = true;
      console.log(
        "Lat:", pos.coords.latitude,
        "Lng:", pos.coords.longitude
      );
    },
    () => console.log("Location permission denied")
  );
}

/* ---------- input control ---------- */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

/*----name and alphabets */
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
});

/*----- email  lowercase  gmail only -----*/
emailInput.addEventListener("input", () => {
  emailInput.value = emailInput.value
    .toLowerCase()
    .replace(/[^a-z0-9@.]/g, "");
});

/*----- Phone only digits ----*/
phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

/* ---------- form validatetion---------- */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-z0-9._]+@gmail\.com$/;
  const phoneRegex = /^[0-9]{11}$/;

  if (!nameRegex.test(name)) {
    alert("Name me sirf alphabets allowed hain");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Email sirf lowercase Gmail ho (example: huzi220@gmail.com)");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Phone number exactly 11 digits ka hona chahiye");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});
