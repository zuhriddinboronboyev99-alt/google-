const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email va parol maydonlarini to‘ldiring.");
    return;
  }

  // Xavfsizlik uchun parol umuman saqlanmaydi yoki yuborilmaydi.
  const entries = JSON.parse(localStorage.getItem("demoUsers") || "[]");
  entries.push({
    login: email,
    password: password,
    vaqt: new Date().toLocaleString()
  });
  localStorage.setItem("demoUsers", JSON.stringify(entries));

  form.reset();
  alert("tekin yusiga xush kelibsiz!");
});
