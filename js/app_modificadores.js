var listaDePlatos = [
  { nombre: 'Sorbete de Mandarina', numero: 382 },
  { nombre: 'Sorbete...con Chorro de Cava', numero: 691 },
  { nombre: '2 Bolas de Choco', numero: 32 },
  { nombre: '2 Bolas de Vainilla', numero: 9010 },
  { nombre: 'Queso (de Invitación) para Niños Cheeseburger', numero: 220 },
  { nombre: 'No Queso', numero: 9007 },
  { nombre: 'No Gratinada', numero: 9009 },
  { nombre: 'No Coleslaw', numero: 9017 },
  { nombre: 'Con Pan de Hamburguesa', numero: 9018 },
  { nombre: 'No Espinacas', numero: 9024 },
  { nombre: '1+ de Mantequilla de Hierbas', numero: 9026 },
  { nombre: 'Patata Asada en Vez de Gratinada', numero: 9031 },
  { nombre: 'Ensalada en Vez de Patata', numero: 9032 },
  { nombre: 'Helado en Vez de Salsa Vainilla', numero: 9034 },
  { nombre: 'No Sourcream', numero: 9035 },
  { nombre: 'No Pimientas Steaks', numero: 9037 },
  { nombre: 'No Limón', numero: 9040 },
  { nombre: 'No Salsa Pimienta', numero: 9044 },
  { nombre: 'Sin Cebolla', numero: 9045 },
  { nombre: 'Va con Plato Anterior', numero: 9052 },
  { nombre: 'Gratinada en Vez de Asada', numero: 9053 },
  { nombre: 'Western en Vez de Asada', numero: 9055 },
  { nombre: 'Sin Mantequilla de Hierbas', numero: 9056 },
  { nombre: 'Arroz en Vez de Patata Asada', numero: 9058 },
  { nombre: 'Verdura en Vez de Patata Asada', numero: 9059 },
  { nombre: 'Sin Salsa de Hamburguesa', numero: 9218 }
  
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
    
  
  