export const MenuItems = ( e ) => {

    const home     = '.navbar-menu__link--home';
    const about    = '.navbar-menu__link--about';
    const projects = '.navbar-menu__link--projects';
    const skills   = '.navbar-menu__link--skills';

    if ( e.target.matches(`${ home }`) || e.target.matches(`${ home } *`) ) {
        console.log('Opción "Inicio", presionado...');
    }

    if ( e.target.matches(`${ about }`) || e.target.matches(`${ about } *`) ) {
        console.log('Opción "Acerca De", presionado...');
    }

    if ( e.target.matches(`${ projects }`) || e.target.matches(`${ projects } *`) ) {
        console.log('Opción "Projectos", presionado...');
    }

    if ( e.target.matches(`${ skills }`) || e.target.matches(`${ skills } *`) ) {
        console.log('Opción "Habilidades", presionado...');
    }

}