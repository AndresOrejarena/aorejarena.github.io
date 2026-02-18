const userAgent = navigator.userAgent;

if ((userAgent.includes("Edg") || userAgent.includes("Edge"))) {
    document.body.innerHTML = `
            <div style="
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                font-size:2rem;
                font-family:monospace;
                text-align:center;
            ">
                No me gusta Edge.<br>Usa otro navegador.
            </div>
        `;
}

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("modoscuro");
});

const boton = document.getElementById("theme-toggle");
const dia = "☀";
const noche = "⏾";

boton.addEventListener("click", () => {
    // Cambiamos el texto según el estado actual
    if (boton.textContent === dia) {
        boton.textContent = noche;
    } else {
        boton.textContent = dia;
    }
});

const secretLink = document.getElementById("secret-link");

secretLink.addEventListener("click", () => {
    window.open("html/MoreInfo  .html", "_blank"); // abre en otra pestaña
});

