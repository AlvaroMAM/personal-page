(function () {
  var toggle = document.querySelector('.site-nav__toggle');
  var navigation = document.querySelector('.site-nav');

  if (!toggle || !navigation) return;

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 960) {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}());
