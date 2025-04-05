document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const name = prompt("Welcome to Asna's Collection! 💖\nEnter your name:");
if (name) {
    alert("Hello, " + name + "! Enjoy exploring our newest jewelry sets!");
} else {
    alert("Welcome! Enjoy exploring our newest jewelry sets!");
}
