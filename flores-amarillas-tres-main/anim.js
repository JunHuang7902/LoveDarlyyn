// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y sus tiempos de inicio y fin en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", start: 17, end: 23 },
  { text: "Ella lo estaba soñando con la luz en su pupila", start: 25, end: 28 },
  { text: "Y el amarillo del sol, iluminaba la esquina", start: 33, end: 38 },
  { text: "Lo sentía tan cercano", start: 40, end: 42 },
  { text: "lo sentía desde niña", start: 43, end: 46 },
  { text: "Ella sabía que él sabía que algún día pasaría", start: 47, end: 52 },
  { text: "Que vendría a buscarla con sus flores amarillas", start: 52, end: 58 },
  { text: "No te apures, no detengas", start: 60, end: 62 },
  { text: "El instante del encuentro", start: 62, end: 63 },
  { text: "Está dicho que es un hecho", start: 64, end: 65 },
  { text: "No la pierdas, no hay derecho", start: 66, end: 67 },
  { text: "No te olvides que la vida casi nunca está dormida", start: 68, end: 75 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", start: 94, end: 100 },
  { text: "Ella llegó en limusina", start: 102, end: 103 },
  { text: "amarilla por supuesto",start: 104, end: 107 },
  { text: "Él se acercó de repente la miro tan de frente", start: 110, end: 115 },
  { text: "Toda una vida soñada y no pudo decir nada", start: 117, end: 122 },
  { text: "Ella sabía que él sabía que algún día pasaría", start: 124, end: 128},
  { text: "Que vendría a buscarla con sus flores amarillas", start: 128, end: 134 },
  { text: "No te apures, no detengas", start: 136, end: 138 },
  { text: "El instante del encuentro", start: 138, end: 139 },
  { text: "Está dicho que es un hecho", start: 139, end: 140 },
  { text: "No la pierdas, no hay derecho", start: 140, end: 141 },
  { text: "No te olvides que la vida casi nunca está dormida", start: 141, end: 149 },
  { text: "Ella sabía que él sabía que algún día pasaría", start: 167, end: 171},
  { text: "Que vendría a buscarla con sus flores amarillas", start: 171, end: 177 },
  { text: "No te apures, no detengas", start: 177, end: 179 },
  { text: "El instante del encuentro", start: 179, end: 180 },
  { text: "Está dicho que es un hecho", start: 180, end: 181 },
  { text: "No la pierdas, no hay derecho", start: 181, end: 182 },
  { text: "No te olvides que la vida casi nunca está dormida", start: 181, end: 189 },
  { text: "Ella sabía que él sabía", start: 191, end: 193 },
  { text: "Él sabía, ella sabía", start: 193, end: 195 },
  { text: "Que él sabía, ella sabía", start: 195, end: 197 },
  { text: "Y se olvidaron de sus flores amarillas", start: 197, end: 201 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.end
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.transition = "opacity 0.2s ease-in-out";
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.transition = "opacity 0.2s ease-in-out";
    lyrics.style.opacity = 0;
  }
}

audio.addEventListener("timeupdate", updateLyrics);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
