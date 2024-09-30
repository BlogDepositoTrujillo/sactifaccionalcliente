/***reloj */

var database = [
  { title: "Sika 1 1kg", file: "archivo1.html" },
  { title: "Cemento gris uso general cemex 50kg", file: "archivo2.html" },/***CEMENTO GRIS USO GENERAL CEMEX 50KGs */
  { title: "Teja de zinc cal 30 x 3mts acesco ", file: "archivo3.html" }, /***ZINC 0.30 CAL.30 3X10 ACESCO PESO 6.24 KG */
  { title: "Cajilla de cemento para contador de agua", file: "archivo4.html" },/***CAJILLAS DE CEMENTO PARA CONTADOR DE AGUA*/
  { title: " Caja de puntilla 1 1/2 in C.A MEJIA 350gr ", file: "archivo5.html" },/***PUNTILLA C.A MEJIA 350GR 11/2" */
  { title: "Alambre dulce negro ", file: "archivo6.html" },/**ALAMBRE NEGRO RECOCIDO */
  { title: "Alambre dulce Galvanizado", file: "archivo7.html" },/**ALAMBRE GALVANIZADO Nº18 -105.48 MT  */
  { title: "Varilla corrugada 1/2 in x 6 mts", file: "archivo8.html" },/**BARRA CORRUGADA 1/2 X 6 MTS NTC 2289 PESO 5.95 KG   */
  { title: "Sikafill 12 power blanco 1 galon", file: "index.html" },/**SIKAFILL 12 POWER BLANCO 1 GALON 516649   */
  { title: "Cal Agricola x 40 kl bulto", file: "archivo9.html" },/***CAL AGRICOLA X 40 KL BULTO   */
  { title: "Tubo sanitario tecnoplex 2 in x 6 mts t/liv ", file: "archivo9.html" },/***TUBO SANITARIA TECNOPLEX 2" X 6M T/LIV  */
  { title: "Tubo sanitario tecnoplex 3 in x 6 mts t/liv", file: "archivo9.html" },/***TUBO SANITARIA TECNOPLEX 3" X 6M T/LIV  */
  { title: "Tubo sanitario tecnoplex 3 in x 6 mts t/liv", file: "archivo9.html" },/***TUBO SANITARIA TECNOPLEX 4" X 6M T/LIV  */
  { title: "Tanque TDP PROCO BAJITO 500 lts", file: "archivo9.html" },/***TANQUE TDP-PROCO BAJITO 500 LTS  */
  { title: "Tanque TDP PROCO BAJITO 500 lts", file: "archivo9.html" },/***TANQUE TDP-PROCO BAJITO 250 LTS  */
  { title: "Tanque Supertank plastico 1000 lts", file: "archivo9.html" },/***TANQUE PLASTICO SUPERTANK 1000 LTS  */
  { title: "Tanque Toptec 250 lts negro", file: "archivo9.html" },/***TANQUE TOPTEC 250LT NEGRO  */
  { title: "Hilaza 4/2 x 1.5 kg", file: "archivo9.html" },/***HILAZA 4/2 X 1.5 KG  */
  { title: "Manguera succion 1 1/4 in x 3 mts", file: "archivo9.html" },/***MANGUERA SUCCION 11/4 X 3M  */
  { title: "Manguera succion 1 1/4 in x 6 mts", file: "archivo9.html" },/***MANGUERA SUCCION 11/4 X 6M  */
  { title: "Manguera succion 3 in in x 3 mts", file: "archivo9.html" },/***MANGUERA SUCCION 3 X 3M  */
  { title: "Boquilla Alfacolor Henkel Hueso 5 kg", file: "archivo9.html" },/***BOQUILLA ALFACOLOR HUESO 5KG  */
  { title: "Tubo ventilacion Pavco 2 in x 6 mts", file: "archivo9.html" },/***TUBO VENTILACION PAVCO 2 X 6M  */
  { title: "Lamina lisa calibre 18 2x1 mts coll rolled", file: "archivo9.html" },/***LAMINA LISA CAL.18 1.10MM 2X1 COLD ROLLED P.17.27  */
  { title: "Lamina lisa calibre 20 2.44x1.22 mts coll rolled", file: "archivo9.html" },/***LAMINA LISA CAL.20 0.85MM 2.44X1.22 COLD ROLLED   */
  { title: "Lamina lisa calibre 20 2x1 mts coll rolled", file: "archivo9.html" },/***LAMINA LISA CAL.20 0.85MM 2X1 COLD ROLLED P.13.31  */
  { title: "Comedero Colempaques 150 lts", file: "archivo9.html" },/***COMEDERO COLEMPAQUES S/T 150 LTS  */
  { title: "Piso porcelanato frozen blanco 60x120 cm", file: "archivo9.html" },/***PORCELANATO FROZEN BLANCO 60X120  */
  { title: "Piso pared bosco natural 43x87 cm ", file: "archivo9.html" },/***PISO PARED BOSCO NATURAL 43X87  */
  { title: "Piso Bakurah gris 60x60 cm", file: "archivo9.html" },/***PISO BAKURAH GRIS 60X60  */
  { title: "Piso softwood cafe 18x55 cm", file: "archivo9.html" },/***PISO SOFTWOOD CAFÉ 18X55  */
  { title: "Piso traffic stone 54x54", file: "archivo9.html" },/***PISO TRAFFIC STONE 54X54  */
  { title: "Piso pared madera tampa beige 24x90 cm", file: "archivo9.html" },/***PISO-PARED MADERA TAMPA BEIGE 24X90  */
  { title: "Piso pared madera tampa gris 24x90 cm", file: "archivo9.html" },/**PISO-PARED MADERA TAMPA GRIS 24X90  */
  { title: "Piso pared madera monteral beige 24x90 cm", file: "archivo9.html" },/***PISO-PARED MADERA MONTREAL BEIGE 24X90  */
  { title: "Pared madera aspen gris 24x90 cm", file: "archivo9.html" },/***PARED MADERA ASPEN GRIS 24X90  */
  { title: "Pared madera aspen taupe 24x90 cm", file: "archivo9.html" },/***PARED MADERA ASPEN TAUPE 24X90  */
  { title: "Piso mompox cafe 51x51 cm", file: "archivo9.html" },/*** PISO MOMPOX CAFÉ 51X51  */
  { title: "Piso mompox beige 51x51 cm", file: "archivo9.html" },/*** PISO MOMPOX BEIGE 51X51  */
  { title: "Piso galera beige 51x51 cm", file: "archivo9.html" },/*** PISO GALERA BEIGE 51X51  */
  { title: "Piso galera cafe 51x51 cm", file: "archivo9.html" },/*** PISO GALERA CAFÉ 51X51  */
  { title: "Piso urban gris 60x60 cm", file: "archivo9.html" },/*** PISO URBAN GRIS 60X60  */
  { title: "Piso nordico cuero 61x61 cm", file: "archivo9.html" },/*** PISO NORDICO CUERO 61X61  */
  { title: "Piso baranoa cafe 51x51 cm", file: "archivo9.html" },/*** PISO BARANOA CAFÉ 51X51  */
  { title: "Piso arabella mix 60x60 cm", file: "archivo9.html" },/*** PISO ARABELLA MIX 60X60  */
  { title: "Llave lavaplatos mezclador Gricol 8 in RF:01-2828-11", file: "0020160256.html", },/*** MEZCL LVP GRC 8" PRISTINA RF:01-2828-11  */
  { title: "Llave lavamanos cromada solid Grival", file: "archivo9.html" },/*** LLV LVM CROMO SOLID GRIVAL  */
  { title: "Llave lavaplatos mono control cromada solid Grival", file: "archivo9.html" },/*** LLV LVP CROMO M/CONTROL SOLID GRIVAL  */
  { title: "Registro de bola para ducha cromada Solid Grival", file: "archivo9.html" },/*** REGIS BOLA DUCHA SOLID CROMO GRIVAL  */
  { title: "Llave lavaplatos movil mesa antius Gerfor REF:101583", file: "archivo9.html" },/*** LLV LVP MOVIL MESA ANTIUS GERFOR REF:101583  */
  { title: "Filtro para lavaplatos acero Gricol REF:RB-9727-11S", file: "archivo9.html" },/*** FILTRO GRICOL ACERO 4" RF:RB-9727-11S  */
  { title: "Candado en laton Hermex N° 30 mm", file: "archivo9.html" },/*** CANDADO EN LATON HERMEX N°30MM  */
  { title: "Machete 22 in Niquelado Bellota", file: "archivo9.html" },/*** MACHETE BELLOTA NIQUELADO 22"  */
  { title: "Peinilla 22 in 3 canales Niquelado Bellota", file: "archivo9.html" },/*** PEINILLA BELLOTA NIQ. 3 CANALES 22"  */
  { title: "Rula 24 in Tiburon", file: "archivo9.html" },/*** RULA TIBURON DE 24"   */
  { title: "Cortabaldosa 600 mm 24 in Rubi", file: "archivo9.html" },/*** CORTABALDOSA RUBI 600MM 24"  */
  { title: "Flexometro 3 mts Herragro", file: "archivo9.html" },/*** FLEXOMETRO HERRAGRO 3MT  */
  { title: "Lavamanos Vessel sabina gris mate Euroceramica", file: "archivo9.html" },/*** LVM EUROCERAMICA VESSEL SABINA GRIS MATE  */
  { title: "Combo sanitario blanco Guajira alongado sin/pedestal Euro", file: "archivo9.html" },/*** COMBO GUAJIRA ALONGADO BLANCO SIN PEDES  EUROCERAMICA  */
  { title: "Kit valvula flotador para tanque 3 in Bola cobre Helman", file: "archivo9.html" },/*** KIT VALVULA FLOTADOR 3" BOLA COBRE HELMAN  */
  { title: "Hidromasaje blanco Honolulu izquierdo 180x120 cm", file: "archivo9.html" },/*** HIDROMASAJE HONOLULU IZQUI 180X120 BLANCO  */
  { title: "Ducha electrica fusion blanca dirigible slim 110 Voltios Rf:1601110S", file: "archivo9.html" },/*** DCHA FUSION BLANC DIRIGIBL SLIM 110V BOCCHE RF:1601110S   */
  { title: "Kit lavaplatos acero 94x48 izquierdo Gricol", file: "archivo9.html" },/*** KIT GRC LVP ACERO 94X48 IZQUIERDO  */
  { title: "Kit lavaplatos acero 94x48 derecho Gricol", file: "archivo9.html" },/*** KIT GRC LVP ACERO 94X48 DERECHO  */
  { title: "Mueble blanco lavamanos+tribeca 63x48 cm Firplak ", file: "archivo9.html" },/***MUEBLE FIRPLAK 63X48 PISO TRIBECA+LVM BLANCO */
  { title: "Mueble blanco elevado tambo+lavamanos 48x43 Firplak ", file: "archivo9.html" },/*** MUEBLE FIRPLAK 48X43 ELEVADO TAMBO+LVM BLANCO  */
  { title: "Kit lavaplatos acero 60x40x3 1/2 in Gricol", file: "archivo9.html" },/*** KIT GRC LVP ACERO 60X40X31/2  */
  { title: "Microaspresor 3/8 in sin estaca", file: "archivo9.html" },/*** MICROASPERSOR 3/8" SIN ESTACA  */ 
  { title: "Esquinero whin aluminio brillante t25 X 2.50 mts", file: "archivo9.html" },/***WHIN ALUMINIO BRILLANTE T25 X 2.50 MTS  */  
  { title: "LLave para lavaplatos en meson con  mezclador, Ref: YW107-10 Bocche", file: "archivo9.html" },/*** MEZCL MESON LVP ESQUA NARANJA REF:YW107-10 BOCCHE  */ 
  { title: "Disco corte metal 7x5/64x7/8 in NEO", file: "archivo9.html" },/*** DISCO NEO METAL 7X5/64X7/8  */ 
  { title: "Caja plastica para herramientas 22.5 in Uyustools", file: "archivo9.html" },/*** CAJA HERRAMIENTAS PLASTICA 22.5" CJU223 UYUSTOOLS  */ 
  { title: "Tee rapida 1/2 in para manguera agricola", file: "archivo9.html" },/*** TEE RAPIDA 1/2" P/MANGUERA AGRICOLA   */ 
  { title: "Valvula pie bronce 3 in Veroni", file: "archivo9.html" },/***VALVULA PIE BRONCE 3" VERONI  */ 
  { title: "Niple blanco Forte REF: NFB-01 Bocche", file: "archivo9.html" },/*** NIPLE FORTE BOCCHERINI BLANCO RF:NFB-01  */ 
  { title: "Tee rapida 3 in para manguera agricola", file: "archivo9.html" },/***TEE RAPIDA 3" P/MANGUERA AGRICOLA   */ 
  { title: "Espejo con marco madera parma boton 60x50 cm", file: "archivo9.html" },/**ESPEJO 60X50 MARCO MADERA PARMA BOTON  */ 
  { title: "Espejo con marco madera palermo botones 60x50 cm", file: "archivo9.html" },/***ESPEJO 60X50 MARCO MADERA PALERMO BOTONES  */ 
  { title: "Ducha Horizontal lusso negra a 110 voltios REF: 28071110 Bocche", file: "archivo9.html" },/***DCH HORIZONTA LUSSO NEGRA 110V RF:2807110 BOCCHE  */ 
  { title: "Cuchilla cuadrada para guadaña pulida calibre 13 1 in Herragro ", file: "archivo9.html" },/***CUCHILLA GUA/HERRAGRO PULI C13 1" CUADRADA  */ 
  { title: "Cuchilla para guadaña pulida calibre 13 1 in Herragro", file: "archivo9.html" },/***CUCHILLA GUA/HERRAGRO PULIDA C13 1"  */ 
  { title: "Cuchilla para guadaña roja calibre 13 1 in Herragro", file: "archivo9.html" },/***CUCHILLA GUA/HERRAGRO ROJA C13 1"  */ 
  { title: "Surtidor plastico con estaca 1/2 in Forte", file: "archivo9.html" },/***SURTIDOR PLASTICO 1/2" C/ESTACA PLAST FORTE/LEON  */ 
  { title: "Malla cuadrada plastica blanca 12x12 1.50 x 30 mts largo", file: "0010250027.html" },/***MALLA CUADRADA PLASTICA BLANCA 12X12 1.50X30 MTS M15SB12 STAND  */ 
  { title: "Universal pvc 2 1/2 in ERA", file: "archivo9.html" },/***UNIVERSAL PVC 21/2" ERA  */ 

  
  { title: "Resultado 10", file: "archivo10.html" }
];

var searchInput = document.getElementById("searchInput");
var searchIcon = document.getElementById("searchIcon");
var searchResults = document.getElementById("searchResults");
var selectedResultIndex = -1;
var lastDisplayedResults = [];

// Función para mostrar los resultados de búsqueda
function displayResults(results) {
  searchResults.innerHTML = "";

  results.slice(0, 8).forEach(function (result, index) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = result.file;
      a.textContent = result.title;
      li.appendChild(a);
      searchResults.appendChild(li);

      li.addEventListener("click", function () {
          window.location.href = result.file;
      });
  });

  if (results.length > 0) {
      searchResults.style.display = "block";
      lastDisplayedResults = results;
  } else {
      searchResults.style.display = "none";
  }
}
// Función para actualizar el resultado seleccionado
function updateSelectedResult(index) {
  var results = document.querySelectorAll("#searchResults li");

  results.forEach(function (result, i) {
      if (i === index) {
          result.classList.add("selected");
      } else {
          result.classList.remove("selected");
      }
  });

  selectedResultIndex = index;
}

// Función para actualizar el ancho del contenedor de resultados
function updateResultsContainerWidth() {
  var searchContainerWidth = searchInput.offsetWidth;
  searchResults.style.width = searchContainerWidth + "px";
}

// Evento al hacer clic en el icono de búsqueda
searchIcon.addEventListener("click", function () {
  var searchText = searchInput.value.toLowerCase();
  var results = database.filter(function (result) {
      return result.title.toLowerCase().includes(searchText);
  });

  displayResults(results);

  if (results.length > 0) {
      updateSelectedResult(0);
  }
});

// Evento al escribir en el campo de búsqueda
searchInput.addEventListener("input", function () {
  var searchText = searchInput.value.toLowerCase();
  var results = database.filter(function (result) {
      return result.title.toLowerCase().includes(searchText);
  });

  displayResults(results);

  if (results.length > 0) {
      updateSelectedResult(0);
  }
});

// Evento al hacer clic fuera del buscador para cerrar los resultados
document.addEventListener("click", function (event) {
  var isClickInsideSearchContainer = searchContainer.contains(event.target);
  if (!isClickInsideSearchContainer) {
      searchResults.style.display = "none";
  }
});

// Evento al hacer clic en el campo de búsqueda para mostrar los últimos resultados
searchInput.addEventListener("click", function () {
  if (lastDisplayedResults.length > 0) {
      displayResults(lastDisplayedResults);
  }
});

// Escuchar eventos de teclado para navegar por los resultados y tomar el primer resultado al presionar "Enter"
searchInput.addEventListener("keydown", function (event) {
  var key = event.key;
  var results = document.querySelectorAll("#searchResults li");

  if (key === "ArrowUp" && selectedResultIndex > 0) {
      updateSelectedResult(selectedResultIndex - 1);
  } else if (key === "ArrowDown" && selectedResultIndex < results.length - 1) {
      updateSelectedResult(selectedResultIndex + 1);
  } else if (key === "Enter" && selectedResultIndex !== -1) {
      var selectedResult = results[selectedResultIndex];
      var link = selectedResult.querySelector("a");
      var file = link.getAttribute("href");
      window.location.href = file;
  }
});

// Actualizar el ancho del contenedor de resultados al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener("DOMContentLoaded", updateResultsContainerWidth);
window.addEventListener("resize", updateResultsContainerWidth);
/* PRODUCTOS***/
function filterItems(option) {
    var items = document.getElementsByClassName("item");

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (option === "todos") {
        item.classList.remove("hide");
      } else if (item.classList.contains(option)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  }
/****FIN DE PRODUCTOS */




const portfolioLightbox = GLightbox({
 selector: '.portfolio-lightbox'
});




/***aa */

