const menubtn = document.getElementById("menubtn");
const navlist = document.getElementById("navlist");
menubtn.addEventListener("click", () => {
  navlist.classList.toggle("show");
});

const formbtn = document.getElementById("formbtn");

formbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const dateInput = document.getElementById("date");

  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const dateError = document.getElementById("date-error");

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    isValid = false;
  } else {
    nameError.classList.add("hidden");
    nameInput.classList.remove("border-red-500");
  }

  if (phoneInput.value.trim().length !== 10) {
    phoneError.classList.remove("hidden");
    phoneInput.classList.add("border-red-500");
    isValid = false;
  } else {
    phoneError.classList.add("hidden");
    phoneInput.classList.remove("border-red-500");
  }

  if (dateInput.value === "") {
    dateError.classList.remove("hidden");
    dateInput.classList.add("border-red-500");
    isValid = false;
  } else {
    dateError.classList.add("hidden");
    dateInput.classList.remove("border-red-500");
  }

  if (!isValid) {
    return;
  }

  const whatsappNumber = "213779514431";

  const message = `Nouvelle Réservation - HB Hostel\n\nNom complet: ${nameInput.value}\nN° de Téléphone: ${phoneInput.value}\nDate de réservation: ${dateInput.value}`;
  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
});
