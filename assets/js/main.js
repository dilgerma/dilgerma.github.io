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

  // Expandable nav dropdowns (e.g. "What is this about", "Get Support")
  const navDropdowns = document.querySelectorAll('.nav-dropdown');

  navDropdowns.forEach(function(navDropdown) {
    const navDropdownToggle = navDropdown.querySelector('.nav-dropdown-toggle');
    if (!navDropdownToggle) return;

    const closeNavDropdown = function() {
      navDropdown.classList.remove('open');
      navDropdownToggle.setAttribute('aria-expanded', 'false');
    };

    navDropdownToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      navDropdowns.forEach(function(otherDropdown) {
        if (otherDropdown !== navDropdown) {
          otherDropdown.classList.remove('open');
          const otherToggle = otherDropdown.querySelector('.nav-dropdown-toggle');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
        }
      });
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
  });
});