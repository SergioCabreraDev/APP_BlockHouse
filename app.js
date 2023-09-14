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
  

