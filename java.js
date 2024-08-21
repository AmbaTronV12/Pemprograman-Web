function shuffleImages() {
    const container = document.getElementById('imageRow');
    const images = Array.from(container.children);
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(images[j]);
    }
}

function toggleTable(button) {
    const table = button.nextElementSibling;
    if (table.style.display === "none") {
        table.style.display = "table";
        button.textContent = "Hide Table";
    } else {
        table.style.display = "none";
        button.textContent = "Show Table";
    }
}