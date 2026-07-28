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

  // "What is this about" expandable nav dropdown
  const navDropdown = document.querySelector('.nav-dropdown');
  const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

  if (navDropdown && navDropdownToggle) {
    const closeNavDropdown = function() {
      navDropdown.classList.remove('open');
      navDropdownToggle.setAttribute('aria-expanded', 'false');
    };

    navDropdownToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      const isOpen = navDropdown.classList.toggle('open');
      navDropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function(event) {
      if (!navDropdown.contains(event.target)) {
        closeNavDropdown();
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeNavDropdown();
      }
    });
  }
});