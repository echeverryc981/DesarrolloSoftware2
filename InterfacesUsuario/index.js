/*NELSON CAMILO ECHEVERRI VELEZ */
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
    },
    {
        fondo: '#E0F7FA', 
        navbar: '#00838F', 
        texto: '#004D40',  
        boton: '#B2EBF2'  
    },
    {
        fondo: '#FFFCF9', 
        navbar: '#FF5722', 
        texto: '#E91E63',  
        boton: '#FFC107'  
    },
    {
        fondo: '#F3E5F5', 
        navbar: '#7B1FA2', 
        texto: '#4A148C',  
        boton: '#E1BEE7'  
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
    'image/tbee.jpg',
    'image/felix.jpg',
    'image/jplenio.jpg'
];

let colorActual = 0; 
let fuenteActual = 0;

cambiarColorBtn.addEventListener('click', () => {
    colorActual = (colorActual + 1) % paletaColores.length; 
    cambiarColores(paletaColores[colorActual]);

    const imagenActual = imagenesFondo[Math.floor(Math.random() * imagenesFondo.length)];
    document.body.style.backgroundImage = `url(${imagenActual})`; 
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 

});

cambiarTextoBtn.addEventListener('click', () => {
    fuenteActual = (fuenteActual + 1) % fuentes.length; 
    document.body.style.fontFamily = fuentes[fuenteActual];
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
