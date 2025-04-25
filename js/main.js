// Import modules
import { preloader } from './modules/preloader.js';
import { handleSearchPanelMobile } from './modules/handleSearchPanelMobile.js';
import { handleSearchPanelDesktop } from './modules/handleSearchPanelDesktop.js';
import { handleHamburgerMenu } from './modules/handleHamburgerMenu.js';
import { handleHeroBanner } from './modules/handleHeroBanner.js';
import { checkSignInStateAndUpdate } from './modules/checkSignInStateAndUpdate.js';
import { handleSignOutBtn } from './modules/handleSignOutBtn.js';
import { handlePfpDropdown } from './modules/handlePfpDropdown.js';
import { handleFixedMangaContainer } from './modules/handleFixedMangaContainer.js';
import { handleMangaSectionHeight } from './modules/handleMangaSectionHeight.js';
import { handleMangaScrollSpeed } from './modules/handleMangaScrollSpeed.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll();

    // preloader();
    handleSearchPanelMobile();
    handleSearchPanelDesktop();
    handleHamburgerMenu();
    handleHeroBanner();
    checkSignInStateAndUpdate();
    handleSignOutBtn();
    handlePfpDropdown();
    handleFixedMangaContainer();
    handleMangaSectionHeight();
    handleMangaScrollSpeed();
});
