window.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.nav-link');
    function updateMenuBorders() {
      if (window.innerWidth >= 992) {
        // Modo Large: Adicionar a classe "rounded" aos itens de menu
        menuItems.forEach(function (item) {
          item.classList.add('rounded');
        });
      } else {
        // Modo Colapsado: Remover a classe "rounded" dos itens de menu
        menuItems.forEach(function (item) {
          item.classList.remove('rounded');
        });
      }
    }
  
  
    // Atualizar as bordas do menu quando a janela for redimensionada
    window.addEventListener('resize', updateMenuBorders);

  
    // Chamar a função inicialmente para definir as bordas e a margem corretamente
    updateMenuBorders();
 
  });
  