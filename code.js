const menubtn = document.getElementById("menubtn");
const navlist = document.getElementById("navlist");
menubtn.addEventListener("click", () => {
  navlist.classList.toggle("show");
});

function openBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// إغلاق المودال عند النقر في المساحة الداكنة خارجه
window.addEventListener("click", function (event) {
  let modal = document.getElementById("bookingModal");
  if (event.target === modal) {
    closeBookingModal();
  }
});

// كود التحقق وإرسال الواتساب
document.addEventListener("DOMContentLoaded", function () {
  const formbtn = document.getElementById("formbtn");

  if (formbtn) {
    formbtn.addEventListener("click", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      const roomTypeInput = document.getElementById("room-type");
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

      if (roomTypeInput.value === "") {
        roomTypeInput.classList.add("border-red-500");
        isValid = false;
      } else {
        roomTypeInput.classList.remove("border-red-500");
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
      const roomText = roomTypeInput.options[roomTypeInput.selectedIndex].text;

      const message = `Nouvelle Réservation - Hotel\n\nNom complet: ${nameInput.value}\nN° de Téléphone: ${phoneInput.value}\nType de chambre: ${roomText}\nDate de réservation: ${dateInput.value}`;
      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

      closeBookingModal();
    });
  }
});
// Atouts
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove(
      "translate-x-0",
      "translate-x-full",
      "-translate-x-full",
    );

    if (i === index) {
      slide.classList.add("translate-x-0");
    } else if (i < index) {
      slide.classList.add("-translate-x-full");
    } else {
      slide.classList.add("translate-x-full");
    }
  });

  // إظهار السهم المناسب
  if (index === 0) {
    nextBtn.classList.remove("hidden");
    prevBtn.classList.add("hidden");
  } else {
    nextBtn.classList.add("hidden");
    prevBtn.classList.remove("hidden");
  }
}

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

showSlide(0);

setTimeout(() => {
  currentSlide = 1;
  showSlide(currentSlide);
}, 1000);
