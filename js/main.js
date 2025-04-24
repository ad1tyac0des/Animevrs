// Import modules
import { preloader } from './modules/preloader.js';
import { handleSearchPanelMobile } from './modules/handleSearchPanelMobile.js';
import { handleSearchPanelDesktop } from './modules/handleSearchPanelDesktop.js';
import { handleHamburgerMenu } from './modules/handleHamburgerMenu.js';
import { handleHeroBanner } from './modules/handleHeroBanner.js';

document.addEventListener('DOMContentLoaded', () => {
    // preloader();
    handleSearchPanelMobile();
    handleSearchPanelDesktop();
    handleHamburgerMenu();
    handleHeroBanner();
});
