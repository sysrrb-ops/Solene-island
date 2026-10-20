const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Replace this with the URL of your travel-partner group's website.
const TRAVEL_PARTNER_URL = "";
const partnerLink = document.getElementById("travelPartnerLink");
const partnerNote = document.querySelector(".partner-note");

if (TRAVEL_PARTNER_URL.trim()) {
  partnerLink.href = TRAVEL_PARTNER_URL;
  partnerNote.textContent = "Explore curated journeys with our travel partner.";
} else {
  partnerLink.addEventListener("click", (event) => {
    event.preventDefault();
    partnerNote.textContent = "Add your partner's website URL in script.js to activate this link.";
  });
}

document.getElementById("enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("guestName").value.trim();
  const email = document.getElementById("guestEmail").value.trim();
  const stay = document.getElementById("stayType").value;
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("Private stay enquiry — SOLÉNE PRIVATE ISLAND");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPreferred stay: ${stay}\nTrip details: ${message}\n\nStudent project demo enquiry.`
  );
  document.getElementById("formStatus").textContent =
    "Your email draft is ready to open. This demo does not store enquiries online.";
  window.location.href = `mailto:enquiries@solene.example?subject=${subject}&body=${body}`;
});
