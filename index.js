document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-demo");
  const text = document.getElementById("text_info");
  const tombolTema = document.getElementById("tema");
  const bodyElement = document.body;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nama").value;
    const skill = document.getElementById("skill").value;

    text.textContent = `Hello, ${name}! ${skill} Yang kamu pilih .`;

    const colors = {
      HTML: "#C96868",
      CSS: "#7EACB5",
      JAVASCRIPT: "#CD5C08",
    };

    document.documentElement.style.setProperty("--blue-color",colors[skill] || "#000");
  });

  tombolTema.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {
      themeButton.textContent = "Light Mode";
    } else {
      themeButton.textContent = "Dark Mode";
    }
  });
});
