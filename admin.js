const tbody = document.getElementById("users");

function showUsers() {
  const entries = JSON.parse(localStorage.getItem("demoUsers") || "[]");
  tbody.replaceChildren();

  entries.forEach((entry) => {
    const row = document.createElement("tr");
    [entry.login, entry.password, entry.vaqt].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
}

document.getElementById("clearBtn").addEventListener("click", () => {
  if (confirm("Demo yozuvlarini tozalaysizmi?")) {
    localStorage.removeItem("demoUsers");
    showUsers();
  }
});

showUsers();
