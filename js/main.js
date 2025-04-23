// Import modules
import { preloader } from './modules/preloader.js';
import { handleSearchPanel } from './modules/handleSearchPanel.js';
import { handleHamburgerMenu } from './modules/handleHamburgerMenu.js';

document.addEventListener('DOMContentLoaded', () => {
    // preloader();
    handleSearchPanel();
    handleHamburgerMenu();
});
