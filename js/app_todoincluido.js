var listaDePlatos = [
    { nombre: 'Ensalada Block House', numero: 40 },
    { nombre: 'Ensalada Cesar', numero: 42 },
    { nombre: 'Ensalada de Tomate', numero: 47 },
    { nombre: 'Carpaccio', numero: 115 },
    { nombre: 'Bruschetta', numero: 241},
    { nombre: 'Tartar 190gr', numero: 112 },
    { nombre: 'Tartar como Entrante', numero: 111},
    { nombre: 'Jumbo Onion Rings', numero: 116 },
    { nombre: 'Salchichas Alemanas', numero: 113 },
    { nombre: 'Bull Soup', numero: 121 },
    { nombre: 'Sopa de Gulash', numero: 122},
    { nombre: 'Sopa Francesa de cebolla', numero: 124},
    { nombre: 'Gazpacho Andaluz', numero: 127 },
    { nombre: 'Crema de Patata', numero: 126 },
    { nombre: 'Veggie Potato', numero: 103 },
    { nombre: 'Sarten Fitness', numero: 13},
    { nombre: 'Ensalada César con Pavo', numero: 105 },
    { nombre: 'Garden Potato', numero: 108 },
    { nombre: 'Medallones de Solomillo', numero: 106 },
    { nombre: 'Ensalada Rancho', numero: 303 },
    { nombre: 'Mrs. Striploin', numero: 1 },
    { nombre: 'Mr. Striploin', numero: 2 },
    { nombre: 'Hereford Rib-Eye', numero: 8 },
    { nombre: 'Rib-Eye Mastercut (350gr)', numero: 9 },
    { nombre: 'Rib-Eye Mastercut (510gr)', numero: 405 },
    { nombre: 'Filet Mignon', numero: 4 },
    { nombre: 'American Tenderloin', numero: 3 },
    { nombre: 'T-bone', numero: 6 },
    { nombre: 'Tomahawk(0,8 - 1,0kg)', numero: 10 },
    { nombre: 'Tomahawk(1,1 - 1,4kg)', numero: 12 },
    { nombre: 'Segunda Guarnicion Tomahawk', numero: 406 },
    { nombre: 'Tierno Lomo de Cordero', numero: 118 },
    { nombre: 'Salmón del Fiordo', numero: 17},
    { nombre: 'Pavo al Grill', numero: 11},
    { nombre: 'Pavo y Seta', numero: 14},
    { nombre: 'Gaucho Steak', numero: 5},
    { nombre: 'Barbacoa de Ternera', numero: 16},
    { nombre: 'Classic Block Burger', numero: 7},
    { nombre: 'Cheeseburger', numero: 307},
    { nombre: 'New York Cheese Burger', numero: 107},
    { nombre: 'BBQ Burger', numero: 308},
    { nombre: 'Spare Ribs', numero: 102},
    { nombre: 'Hot Salsa Burger', numero: 309},
    { nombre: 'Pan BLOCK HOUSE', numero: 22},
    { nombre: 'Backed Potato', numero: 20},
    { nombre: 'Patatas Gratinadas', numero: 201},
    { nombre: 'Patatas Fritas', numero: 21},
    { nombre: 'Pure de Patata', numero: 304},
    { nombre: 'Mantequilla FRESCA', numero: 260},
    { nombre: 'Mantequilla de Hiervas', numero: 26},
    { nombre: 'Salsa Barbacoa', numero: 28},
    { nombre: 'Salsa Pimienta', numero: 282},
    { nombre: 'Espinacas Frescas "Brasserie"', numero: 24},
    { nombre: 'Verduras Frescas Salteadas', numero: 46},
    { nombre: 'Coleslaw', numero: 23},
    { nombre: 'Champiñones y Setas', numero: 25},
    { nombre: 'Mezcla de Judías', numero: 224},
    { nombre: 'Sour Cream', numero: 27},
    { nombre: 'Fritz', numero: 139 },
    { nombre: 'Nuggets', numero: 135 },
    { nombre: 'Nuggets (+2 nuggets)', numero: 9135 },
    { nombre: 'Toni Tomato', numero: 134 },
    { nombre: 'Toni Tomato(Solo pasta)', numero: 1342},
    { nombre: 'Toni Tomato(Solo salsa)', numero: 1341 },
    { nombre: 'Queso Parmesano', numero: 220},
    { nombre: 'Beefy Montado', numero: 306 },
    { nombre: 'Cowboy', numero: 138 },
    { nombre: 'Chick', numero: 136 },
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
    
  
  