document.addEventListener('DOMContentLoaded', () => {
    const navs = Array.from(document.querySelectorAll('nav'));

    navs.forEach((nav) => {
        const toggle = nav.querySelector('.hamburger');
        const menu = nav.querySelector('#navMenu');

        if (!toggle || !menu) {
            return;
        }

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                toggle.focus();
            }
        };

        const handleOutsideClick = (event) => {
            if (!nav.contains(event.target)) {
                closeMenu();
            }
        };

        const openMenu = () => {
            nav.classList.add('menu-open');
            toggle.classList.add('active');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'Close navigation menu');

            document.addEventListener('keydown', handleEscKey);
            // Defer binding to avoid immediately catching the click that opened the menu
            setTimeout(() => {
                if (nav.classList.contains('menu-open')) {
                    document.addEventListener('click', handleOutsideClick);
                }
            }, 0);
        };

        const closeMenu = () => {
            nav.classList.remove('menu-open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open navigation menu');

            document.removeEventListener('keydown', handleEscKey);
            document.removeEventListener('click', handleOutsideClick);
        };

        toggle.setAttribute('aria-expanded', 'false');

        toggle.addEventListener('click', () => {
            const isOpen = nav.classList.contains('menu-open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        menu.addEventListener('click', (event) => {
            const link = event.target instanceof Element ? event.target.closest('a') : null;
            if (!link) {
                return;
            }

            // Let the browser handle navigation naturally, but fold the menu shortly after
            setTimeout(() => closeMenu(), 120);
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    });
});
