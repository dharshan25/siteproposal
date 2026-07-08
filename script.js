const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (greeting) {
  const partOfDay = hour < 12 ? "Morning" : hour < 17 ? "Afternoon" : "Evening";
  greeting.textContent = `Good ${partOfDay} Dr. Lingaraju.`;
}

const feedback = document.getElementById("doctor-feedback");
const whatsapp = document.getElementById("whatsapp-feedback");

function updateWhatsappMessage() {
  if (!feedback || !whatsapp) return;

  const baseMessage =
    "Hello Rohith, I reviewed the proposal for Dr. Lingaraju A. P. My feedback is:";
  const message = feedback.value.trim()
    ? `${baseMessage}\n\n${feedback.value.trim()}`
    : `${baseMessage}\n\n`;

  whatsapp.href = `https://wa.me/919380245254?text=${encodeURIComponent(message)}`;
}

if (feedback && whatsapp) {
  feedback.addEventListener("input", updateWhatsappMessage);
  updateWhatsappMessage();
}
