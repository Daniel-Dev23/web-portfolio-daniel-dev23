import '../css/reset.css';
import '../css/init.css';
import '../css/media-queries.css';

import { HeaderCustom } from './custom/Header.js';
import { NavCustom } from './custom/Nav.js';
import { HomeComponent } from './components/HomeComponent.js';
import { MenuController } from './helpers/MenuController.js';

const mainApp = () => {

    console.log('✔ The Web Portfolio has been started...');

    const $headerWrapper = document.querySelector('.header-wrapper');
    const $mainWrapper   = document.querySelector('.main-wrapper');
    const $navbarWrapper = document.querySelector('.navbar-wrapper');
    
    $headerWrapper.innerHTML = HeaderCustom();
    $mainWrapper.appendChild( HomeComponent() );
    $navbarWrapper.innerHTML = NavCustom();
    
    // TODO: Agregar funcionamiento del Menu
    const $navLink = document.querySelectorAll('.navbar-menu__link');
    MenuController( $navLink );    


    // TODO: Realizar la sección Home
    // TODO: Optimizar código HTML, CSS y JS
    // TODO: Realizar la sección About Me

}

mainApp();