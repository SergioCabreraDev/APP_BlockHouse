var listaDePlatos = [
    { nombre: 'Strudel de Manzana', numero: 36 },
    { nombre: 'Brownie', numero: 311 },
    { nombre: 'Tarta de Queso', numero: 34 },
    { nombre: 'Bola de Vainilla', numero: 31 },
    { nombre: 'Bola de Chocolate', numero: 31.9010},
    { nombre: 'Bola de Turrón', numero: 31.9011},
    { nombre: 'Bola de Fresa', numero: 31.9012},
    { nombre: 'Frio y Caliente', numero: 35 },
    { nombre: 'Helado y Chocolate', numero: 37 },
    { nombre: 'Sorbete de Limón', numero: 38 },
    { nombre: 'Sorbete de Mango', numero: 382},
    { nombre: 'Salsa de Chocolate', numero: 370},
    { nombre: 'Salsa de Vainilla', numero: 380 }
  
  
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
    
  
  