const cambiarColorBtn = document.getElementById('cambiarColorBtn');


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



let colorActual = 0; 


cambiarColorBtn.addEventListener('click', () => {
    colorActual = (colorActual + 1) % paletaColores.length; 
    cambiarColores(paletaColores[colorActual]);
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
