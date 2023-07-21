const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    // state
    let isMobileNavOpen = false;

    // handlers
    const handleMobileNav = () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    };

    const handleMobileNavBtn = () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    };


    // events
    headerBtn.addEventListener('click', handleMobileNav);

    mobileLinks.forEach(link => 
        link.addEventListener('click', handleMobileNavBtn)
    );
};

export default mobileNav;