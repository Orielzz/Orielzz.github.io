window.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.nav-link');
    let box = document.querySelectorAll('.box');
    let principal = this.document.querySelectorAll('.principal');
    let teste = this.document.querySelectorAll('.teste');
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
  
    function updateMGbox() {
      if (window.innerWidth < 992) {
        if(window.innerWidth < 576){
            principal.forEach(function (item) {
                item.classList.add('px-0');
            });
            teste.forEach(function(item){
              item.classList.add('px-0')
            })
            return;
        }
        teste.forEach(function(item){
          item.classList.add('px-0')
        })
        box.forEach(function (item) {
            item.classList.add('mx-0');
        });


    
       
        
      }
      else {
        box.forEach(function (item) {
            item.classList.remove('mx-0');
            principal.forEach(function (item) {
                item.classList.remove('px-0');
            });
            teste.forEach(function (item) {
              item.classList.remove('px-0');
          });
        });
      }
      
    }

    
  
    // Atualizar as bordas do menu quando a janela for redimensionada
    window.addEventListener('resize', updateMenuBorders);
    window.addEventListener('resize', updateMGbox);
  
    // Chamar a função inicialmente para definir as bordas e a margem corretamente
    updateMenuBorders();
    updateMGbox();
  });
  