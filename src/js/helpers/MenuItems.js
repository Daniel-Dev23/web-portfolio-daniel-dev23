import { HomeComponent } from '../components/HomeComponent.js';
import { AboutComponent } from '../components/AboutComponent.js';
import { ProjectsComponent } from '../components/ProjectsComponent.js';
import { SkillsComponent } from '../components/SkillsComponent.js';


export const MenuItems = ( e, $mainWrapper ) => {

    $mainWrapper.innerHTML = '';

    const home     = '.navbar-menu__link--home';
    const about    = '.navbar-menu__link--about';
    const projects = '.navbar-menu__link--projects';
    const skills   = '.navbar-menu__link--skills';

    if ( e.target.matches(`${ home }`) || e.target.matches(`${ home } *`) ) {
        $mainWrapper.appendChild( HomeComponent() );
    }

    if ( e.target.matches(`${ about }`) || e.target.matches(`${ about } *`) ) {
        $mainWrapper.appendChild( AboutComponent() );
    }

    if ( e.target.matches(`${ projects }`) || e.target.matches(`${ projects } *`) ) {
        $mainWrapper.appendChild( ProjectsComponent() );
    }

    if ( e.target.matches(`${ skills }`) || e.target.matches(`${ skills } *`) ) {
        $mainWrapper.appendChild( SkillsComponent() );
    }

}