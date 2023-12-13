var listaDePlatos = [
  { nombre: 'Leche', numero: 30 },
  { nombre: 'Agua', numero: 50 },
  { nombre: 'Agua con Gas', numero: 51 },
  { nombre: 'Coca Cola', numero: 52 },
  { nombre: 'Fanta Naranja', numero: 53},
  { nombre: 'Sprite', numero: 54 },
  { nombre: 'Zumo de Piña', numero: 55},
  { nombre: 'Zumo de Naranja', numero: 56 },
  { nombre: 'Zumo de Tomate', numero: 57 },
  { nombre: 'Zumo de Manzana', numero: 58 },
  { nombre: 'Zumo de Melocoton', numero: 59},
  { nombre: 'Coca Cola Cero', numero: 520},
  { nombre: 'Mezcla Cola / Naranja', numero: 530 },
  { nombre: 'Coca Cola Cero Cero', numero: 531 },
  { nombre: 'Fanta Limón', numero: 551 },
  { nombre: 'Tonica', numero: 552},
  { nombre: 'Caña Pequeña', numero: 556 },
  { nombre: 'Nestea', numero: 560 },
  { nombre: 'Aquarius Limon', numero: 561 },
  { nombre: 'Aquarius Naranja', numero: 561.01 },
  { nombre: 'Ginger Ale', numero: 546 },
  { nombre: 'Cerveza Sin Gluten', numero: 566 },
  { nombre: 'Zumo de manzana con agua con gas', numero: 580 },
  { nombre: 'Cerveza', numero: 60 },
  { nombre: 'Clara / Shandy', numero: 61 },
  { nombre: 'Cerveza Sin Alcohol de Botella', numero: 62 },
  { nombre: 'Cerveza Sin Alcohol de Barril', numero: 63 },
  { nombre: 'Cerveza de Botella', numero: 64 },
  { nombre: 'Cerveza de Trigo', numero: 65 },
  { nombre: 'Café Americano', numero: 66 },
  { nombre: 'Martini Rosso', numero: 620 },
  { nombre: 'Martini Blanco', numero: 630 },
  { nombre: 'Café con Leche', numero: 663},
  { nombre: 'Café Cortado', numero: 664},
  { nombre: 'Café Capuccino', numero: 665},
  { nombre: 'Café Solo / Expresso', numero: 666},
  { nombre: 'Café Expresso Doble', numero: 667},
  { nombre: 'Café con Amazonas', numero: 659},
  { nombre: 'Café con Brandy', numero: 660},
  { nombre: 'Té Negro', numero: 68},
  { nombre: 'Té Verde', numero: 68.0101},
  { nombre: 'Té Manzanilla', numero: 668},
  { nombre: 'Té Poleo Menta', numero: 669},
  { nombre: 'Té con Leche', numero: 670},
  { nombre: 'Cava', numero: 690},
  { nombre: 'Tinto de Verano', numero: 790},
  { nombre: 'Shandy sin alcohol', numero: 601},
  { nombre: 'Shandy pequeña sin alcohol', numero: 603},
  { nombre: 'Shandy Pequeña', numero: 604},
  { nombre: 'Jarra', numero: 605},
  { nombre: 'Aperol(Cava)', numero: 693},
  { nombre: 'Hierbas', numero: 86},
  { nombre: 'Carajillo de Baileys', numero: 671},
  { nombre: 'Shandy 0.5L', numero: 607},
  { nombre: 'Baileys', numero: 94},
  { nombre: 'Jarra Sin Alcohol', numero: 606},
  { nombre: '3 Kaires', numero: 611},
  { nombre: 'Cava Benjamín', numero: 690},
  { nombre: 'Cava Anna Blanc Reserva', numero: 695},
  { nombre: 'Cava Anna Blanc Rosé', numero: 697},
  { nombre: 'Pirineos Chardonnay 0.75L', numero: 788},
  { nombre: 'Pirineos Chardonnay 0.15L', numero: 787},
  { nombre: 'Polvorete Godello 0.75L', numero: 791},
  { nombre: 'Polvorete Godello 0.15L', numero: 789},
  { nombre: 'Dominio Granadilla 0.75L', numero: 783},
  { nombre: 'Dominio Granadilla 0.15L', numero: 784},
  { nombre: 'Valdelavaca Verdejo 0.75L', numero: 786},
  { nombre: 'Valdelavaca Verdejo 0.15L', numero: 785},
  { nombre: 'R.Bilbao Rosado 0.75L', numero: 700},
  { nombre: 'R.Bilbao Rosado 0.15L', numero: 705},
  { nombre: 'Ederra 0.75L', numero: 740},
  { nombre: 'Ederra 0.15L', numero: 745},
  { nombre: 'Viña Pomal 0.75L', numero: 904},
  { nombre: 'Viña Pomal 0.15L', numero: 903},
  { nombre: 'Ramon Bilbao 0.75L', numero: 770},
  { nombre: 'Ramon Bilbao 0.15L', numero: 857},
  { nombre: 'Ramon Bilbao 0.50L', numero: 856},
  { nombre: 'Altos Baldoso 0.75L', numero: 867},
  { nombre: 'Altos Baldoso 0.15L', numero: 868},
  { nombre: 'Ondarre Crianza 0.75L', numero: 902},
  { nombre: 'Ondarre Crianza 0.15L', numero: 901},
  { nombre: 'Protos Roble 0.75L', numero: 861},
  { nombre: 'Protos Roble 0.15L', numero: 862},
  { nombre: 'Hito Crianza 0.75L', numero: 880},
  { nombre: 'Hito Crianza 0.15L', numero: 882},
  { nombre: 'Emilio Moro 0.75L', numero: 890},
  { nombre: 'Emilio Moro 0.15L', numero: 889},
  { nombre: 'Malleolus 0.75L', numero: 905}
  

];

var platosRestantes = listaDePlatos.slice(); // Crear una copia de la lista original

function mostrarPlatoAleatorio() {
  // Verificar si hay platos restantes
  if (platosRestantes.length === 0) {
    mostrarMensajeFinal();
    return;
  }

  var indiceAleatorio = Math.floor(Math.random() * platosRestantes.length);
  var platoAleatorio = platosRestantes[indiceAleatorio];

  // Acceder a los elementos en el DOM donde se mostrará la información
  var nombrePlatoElemento = document.getElementById('nombrePlato');
  var numeroPlatoElemento = document.getElementById('numeroPlato');

  // Mostrar el nombre del plato
  nombrePlatoElemento.textContent = platoAleatorio.nombre;

  // Ocultar el numero inicialmente
  numeroPlatoElemento.textContent = ' ¡Adivina el numero! Pulsa aqui para destapar el numero.';

  // Mostrar el contenido del elemento
  var resultadoDiv = document.getElementById('platoAleatorio');
  resultadoDiv.style.display = 'block';

  // Agregar un evento clic al div para mostrar el numero cuando se haga clic
  var manejadorClic = function() {
    
  // Mostrar el numero como entero utilizando parseInt()
  numeroPlatoElemento.textContent = 'Número: ' + parseInt(platoAleatorio.numero);

    // Eliminar el manejador de eventos para evitar que se siga ejecutando
    resultadoDiv.removeEventListener('click', manejadorClic);

    // Eliminar el plato seleccionado de la lista
    platosRestantes.splice(indiceAleatorio, 1);

    // Verificar si hay platos restantes después de eliminar
    if (platosRestantes.length === 0) {
      mostrarMensajeFinal();
    }
  };

  resultadoDiv.addEventListener('click', manejadorClic);
}

function mostrarMensajeFinal() {
  var mensajeFinalElemento = document.getElementById('mensajeFinal');
  mensajeFinalElemento.style.display = 'block';
}

function refreshPage() {
  location.reload(); // Esta función recarga la página
}
function mostrarListaCompleta() {
  var listaCompleta = document.getElementById('listaCompleta');
  listaCompleta.innerHTML = ''; // Limpiar la lista antes de mostrarla

  for (var i = 0; i < listaDePlatos.length; i++) {
    var plato = listaDePlatos[i];
    listaCompleta.innerHTML += `<p>${plato.nombre} - Número: ${plato.numero}</p>`;
  }
}


/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


// Cargar el archivo de traducciones
$.getJSON('/lang/lang.json', function(translations) {
    // Establecer el idioma predeterminado (español)
    var currentLang = 'es';
  
    // Función para cambiar el idioma
    function changeLanguage(lang) {
      $('[data-lang]').each(function() {
        var key = $(this).data('lang');
        if (translations[lang] && translations[lang][key]) {
          $(this).text(translations[lang][key]);
        }
      });
    }
  
    // Cambiar el idioma al cargar la página
    changeLanguage(currentLang);
  
    // Manejar el clic en los botones de cambio de idioma
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      if (lang !== currentLang) {
        changeLanguage(lang);
        currentLang = lang;
      }
    });
  });
  

