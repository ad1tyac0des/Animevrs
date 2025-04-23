// Import modules
import { preloader } from './modules/preloader.js';
import { handleSearchPanelMobile } from './modules/handleSearchPanelMobile.js';
import { handleHamburgerMenu } from './modules/handleHamburgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    // preloader();
    handleSearchPanelMobile();
    handleHamburgerMenu();
});
