const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const type = document.getElementById("type").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !subject || !type || !message) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "⚠️ Invalid email format!";
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone.replace(/[^0-9]/g, ""))) {
    errorMsg.style.color = "red";
    errorMsg.textContent = "⚠️ Enter a valid 10-digit phone number!";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "✅ Message sent successfully!";
  form.reset();
});
