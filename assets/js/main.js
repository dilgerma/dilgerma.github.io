// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const headerMenu = document.querySelector('.header-menu');

  if (mobileMenuToggle && headerMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      headerMenu.classList.toggle('open');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = mobileMenuToggle.contains(event.target) || headerMenu.contains(event.target);

      if (!isClickInside && headerMenu.classList.contains('open')) {
        headerMenu.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
      }
    });

    // Close menu when clicking on a menu item
    const menuLinks = headerMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        headerMenu.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
});