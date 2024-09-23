const cambiarColorBtn = document.getElementById('cambiarColorBtn');
const cambiarTextoBtn = document.getElementById('cambiarTextoBtn');

const paletaColores = [
    {
        fondo: '#E3F2FD', 
        boton: '#BBDEFB'   
    },
    {
        fondo: '#FFEBEE', 
        navbar: '#F50057', 
        texto: '#880E4F',  
        boton: '#FFAB91'  
    }, 
    {
        fondo: '#F1F8E9', 
        navbar: '#4CAF50',
        texto: '#1B5E20', 
        boton: '#C8E6C9'  
    }
];

const fuentes = [
    "'Arial', sans-serif",
    "'Courier New', monospace",
    "'Georgia', serif",
    "'Lobster', cursive",
    "'Righteous', sans-serif",
    "'Zilla Slab', serif",
    "'Fredericka the Great', cursive",
    "'Creepster', cursive"
];

const imagenesFondo = [
    'image/guitara.png',
    'image/montaña.jpg',
    'image/oveja.jpg'
];

let colorActual = 0; 
let fuenteActual = 0;

cambiarColorBtn.addEventListener('click', () => {
    colorActual = (colorActual + 1) % paletaColores.length; 
    cambiarColores(paletaColores[colorActual]);
});

cambiarTextoBtn.addEventListener('click', () => {
    const mainHeading = document.querySelector('h2');
    const mensajes = ["Bienvenidos a nuestra web", "Explora nuestro contenido", "¡Disfruta tu visita!"];
    mainHeading.textContent = mensajes[Math.floor(Math.random() * mensajes.length)];
    
    
    fuenteActual = (fuenteActual + 1) % fuentes.length; 
    document.body.style.fontFamily = fuentes[fuenteActual];

    const imagenActual = imagenesFondo[Math.floor(Math.random() * imagenesFondo.length)];
    document.querySelector('.imagen').src = imagenActual;
});

function cambiarColores(colores) {
    document.body.style.backgroundColor = colores.fondo;
    document.querySelector('.navbar').style.backgroundColor = colores.navbar;
    document.querySelector('.footer').style.backgroundColor = colores.navbar;
    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = colores.boton;
        btn.style.color = colores.texto; 
    });
    document.querySelector('h2').style.color = colores.texto; 
}
