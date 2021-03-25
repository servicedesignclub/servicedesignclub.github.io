(function () {
  const navigationItems = document.querySelectorAll('.navigation__item')
  const navigationCheckbox = document.querySelector('.navigation__checkbox');

  navigationItems.forEach(navigationItem => {
    navigationItem.addEventListener('click', e => {
      navigationCheckbox.checked = false;
      document.querySelector(e.target.href).scrollIntoView({ 
        behavior: 'smooth' 
      });
    })
  })
})()