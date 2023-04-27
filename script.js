 

// Código JavaScript para el footer
console.log("Este es el footer");

// Agregar eventos a los enlaces de redes sociales
const links = document.querySelectorAll("footer ul li a");
links.forEach(link => {
  link.addEventListener("click", () => {
    
   
console.log(`Haz hecho clic en ${link.textContent}`);
  });
});



