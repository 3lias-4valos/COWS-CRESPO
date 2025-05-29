
const datosCuriosos = [
  "Las vacas tienen mejor amiga y se estresan cuando están separadas.",
  "Una vaca puede producir más de 30 litros de leche al día.",
  "Tienen un campo visual de casi 330 grados.",
  "Mastican alrededor de 50 veces por minuto cuando están rumiando."
];
function mostrarDato() {
  const dato = datosCuriosos[Math.floor(Math.random() * datosCuriosos.length)];
  document.getElementById("dato-curioso").innerText = dato;
}
