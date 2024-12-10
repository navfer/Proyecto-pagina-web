//sacar el mes actual
var variableMes = document.getElementById("mes");
var variableDescuento = document.getElementById("descuento");
//var mesActual = new Date().getMonth();
//const monthNameLong = new Date().toLocaleString("en-US", { month: "long" });
//const monthNameShort = new Date().toLocaleString("en-US", { month: "short" });
var mesActual = new Date().toLocaleString('es-ES', { month: 'long' });
variableMes.textContent = mesActual;
if (mesActual.toUpperCase() == "JULIO" || mesActual.toUpperCase() == "AGOSTO" ||mesActual.toUpperCase() == "JUNIO"){
    variableDescuento.textContent= "____Descuento del 5% por vacaciones____";
}
if (mesActual.toUpperCase() == "DICIEMBRE"){
    variableDescuento.textContent= "____Descuento navideño del 10%____";
}

//sacar el año actual
var year = new Date().getFullYear();
document.getElementById("actual-year").textContent = year;

//saludo principal
var variableSaludo = document.getElementById("saludo");
var horaActual = new Date().getHours();
if (horaActual >= 5 && horaActual < 13) {
    variableSaludo.textContent = "Buenos días, ";
  } else if (horaActual >= 13 && horaActual < 20) {
    variableSaludo.textContent = "Buenas tardes, ";
  } else {
    variableSaludo.textContent = "Buenas noches, ";
}



//botón de frases aleatorias
var ArrayDeFrases =[
"El destino mezcla las cartas, nosotros las jugamos",
"No busques los errores, busca un remedio",
"Un libro puede cambiar tu vida en una página y dejarte pensando durante toda una vida.",
"De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir.",
"La vida es una partida, juega bien tus cartas y no te desesperes por las malas.",
"El mundo es un pañuelo y está lleno de mocos.",
"¿Plata? Obvio que quiero, pero la vida es un flash como para pensar solo en dinero.",
"¿SABIAS QUE? Hay más aviones en el mar que submarinos en el cielo",
"No soy torpe, detecto cuando el suelo necesita un abrazo y se lo doy.",
"No está tan mal estar a la deriva, hay algo del vacío que cautiva.",
"La lectura es un viaje de autodescubrimiento que te permite conocer mejor quién eres y quién quieres ser.",
"Un libro es un amigo que nunca falla, siempre está ahí para inspirarte y transportarte a otros mundos.",
"No se puede abrir un libro sin aprender algo.",
"No puedes elegir cómo van a ser las cosas, pero sí cómo vas a enfrentarte a ellas.",
"No llores porque se terminó, sonríe porque sucedió.",
"El único modo de hacer un amigo es serlo.",
"El pasado puede doler, pero según como lo mires, puedes huir de él o aprender." ,
"No hay mayor desprecio que no hacer aprecio.",
"¿SABIAS QUE? La vida es demasiado corta para llevar calcetines aburridos.",
"¿SABIAS QUE? El café es el combustible que mantiene en marcha el mundo de los adultos.",
"¿SABIAS QUE? El 99% de las cosas que te preocupan nunca suceden realmente.",
"¿SABIAS QUE? Los estudios demuestran que el 75% de las estadísticas son inventadas... ¿Será este también?"
];

var contador = 0;
function FraseRandom(){
    contador = contador + 1;
    if (contador >1){
        document.getElementById("frase").textContent = "Vuelve mañana para obtener otra frase";

    }
    else{
    var i = Math.floor(Math.random() * (ArrayDeFrases.length - 1 + 1)) ;
    document.getElementById("frase").textContent = ArrayDeFrases[i];
    }
}

//GENERADOR DEL LIBRO DEL MES

var EsteMes = [
  { 
    //Enero
    T: "Cumbres borrascosas - Emily Brontë",
    D: "Publicada en 1847. El argumento de la novela gira en torno a las pasiones, el desprecio y la venganza. Adoptado por la familia Earnshaw, el niño Heathcliff sufre el desprecio de familiares, criados y vecinos. Además, padece el rechazo de Catherine, quien a pesar de corresponderle, opta por un matrimonio a conveniencia. Entonces, Heathcliff trama su venganza."
  },

  {
    //Febrero
    T: "La Metamorfosis - Franz Kafka",
    D: "Publicada en 1915. La metamorfosis es un relato dividido en tres partes, donde se narra la transformación de Gregorio Samsa, un viajante de comercio de telas, en un monstruoso insecto, y el impacto que tendrá este acontecimiento no sólo en su vida, sino en la de su familia. "
  },

  {
    //Marzo
    T: "1984 - George Orwell",
    D: "Novela de distopía cuya trama ocurre en Oceanía, un país dominado por un gobierno totalitario que mantiene en constante vigilancia a sus ciudadanos e, incluso, insiste en espiar sus pensamientos para mantener el orden."
  },

  {
    //Abril
    T: "El principito - Antoine de Saint-Exupéry",
    D: "Publicada en 1943. La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad."
  },

  {
    //Mayo
    T: "El retrato de Dorian Gray - Oscar Wild",
    D: "Publicada en 1890. Novela filosófica que representa la obsesión sobre el poder de la juventud y la belleza. Es, al mismo tiempo, una reflexión sobre la naturaleza del arte y la estética"
  },

  {
    //Junio
    T: "Crimen y Castigo - Fiódor Dostoyevski",
    D: "Publicada en 1866. Relata la historia de un crimen cometido por el exestudiante Rodión Ramanovich Raskolnikov y sus consecuencias."
  },

  {
    //Julio
    T: "Hamlet - William Shakespeare",
    D: "Publicada en 1603. El argumento de esta obra gira entorno a la venganza llevada a cabo por el príncipe Hamlet para vindicar la muerte de su padre, el rey Hamlet, quien ha sido asesinado por su hermano Claudio."
  },

  {
    //Agosto
    T: "Los miserables - Victor Hugo",
    D: "Publicada en 1862. La historia se enmarca en el período de la restauración de la monarquía francesa, que tuvo lugar en la primera mitad del siglo XIX. Su tema gira en torno al bien, el mal, la ética, la justicia y la fe. La novela examina los valores vigentes en la sociedad francesa de mediados del siglo XIX y reflexiona sobre la naturaleza humana frente a la adversidad. Para ello, cuenta la historia de un expresidiario que desea reformarse. "
  },

  {
    //Septiembre
    T: "El señor de las moscas - William Golding",
    D: "Publicada en 1954. En el mundo hay una guerra. El avión en el que viajan unos chicos británicos se estrella en una isla desierta por culpa de una tormenta. Siendo los únicos supervivientes, los niños se ven obligados a sobrevivir sin ningún adulto."
  },

  {
    //Octubre
    T: "Matar a un ruiseñor - Harper Lee",
    D: "Matar a un ruiseñor muestra una comunidad dominada por los prejuicios raciales, la desconfianza hacia lo diferente, la rigidez de los vínculos familiares y vecinales. Y con un sistema judicial sin apenas garantías para la población negra."
  },

  {
    //Noviembre
    T: "Fahrenheit 451 - Ray Bradbury",
    D: "La obra presenta un mundo en el que los libros están prohibidos. Los bomberos son los encargados de quemarlos, para así evitar que se propague la infección del pensamiento. De hecho, el título del libro proviene de la temperatura a la que se quema el papel."
  },

  {
    //Diciembre
    T: "Romeo y Julieta - William Shakespeare",
    D: "Escrita aproximadamente entre 1593 y 1594. Verona es el escenario del conflicto histórico entre dos familias tradicionales: los Montesco y los Capuleto. Por un infortunio del destino, Romeo y Julieta, ambos hijos únicos, se conocen durante un baile de máscaras y se enamoran perdidamente."
  }
];

function PonerLibro() {
  // Hacer que desaparezca el botón
  var boton = document.getElementById("Desaparece");
  boton.style.display = "none";
  
  // Obtener el mes actual
  var fecha = new Date();
  var MesDigito = fecha.getMonth();

  var titulo = EsteMes[MesDigito].T;
  var descripcion = EsteMes[MesDigito].D;
  document.getElementById("LibroDelMes").textContent = titulo;
  document.getElementById("DescripcionDelMes").textContent = descripcion;
};