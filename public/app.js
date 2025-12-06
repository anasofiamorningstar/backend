// Cargar proyectos desde tu backend
async function cargarProyectos() {
    try {
        const res = await fetch("/api/portfolio"); // ruta relativa
        const proyectos = await res.json();

        const grid = document.getElementById("proyectosGrid");
        grid.innerHTML = ""; // limpiar

        proyectos.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}" />
                <h3>${item.title}</h3>
                <p>${item.description || ""}</p>
            `;

            grid.appendChild(div);
        });
    } catch (error) {
        console.error("Error cargando proyectos:", error);
    }
}

cargarProyectos();

// Menu responsive
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
