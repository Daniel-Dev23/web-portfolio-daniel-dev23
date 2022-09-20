import { MenuItems } from './MenuItems.js';
export const MenuController = ( $navLink ) => {

    $navLink.forEach(link => {
        link.addEventListener('click', e => {

            $navLink.forEach( item => item.classList.remove('active') );
            link.classList.add('active');

            MenuItems( e );

        });
    });

}