import { WhoCustom } from '../custom/WhoCustom.js';
import { PreparationCustom } from '../custom/PreparationCustom.js';
import { ContactCustom } from '../custom/ContactCustom.js';
import { HardCustom } from '../custom/HardCustom';
import { SoftCustom } from '../custom/SoftCustom';
import { SubjectsCustom } from '../custom/SubjectsCustom';
import { ImpulseCustom } from '../custom/ImpulseCustom';


export const SubMenuItems = ( e, $renderContent ) => {

    const who         = '.subnavbar-menu__link--who';
    const preparation = '.subnavbar-menu__link--preparation';
    const contact     = '.subnavbar-menu__link--contact';

    const duras    = '.subnavbar-menu__link--duras';
    const blandas  = '.subnavbar-menu__link--blandas';
    const materias = '.subnavbar-menu__link--materias';
    const impulso  = '.subnavbar-menu__link--impulso';

    if ( e.target.matches(`${ who }`) || e.target.matches(`${ who } *`) ) {
        $renderContent.innerHTML = WhoCustom();
    }

    if ( e.target.matches(`${ preparation }`) || e.target.matches(`${ preparation } *`) ) {
        $renderContent.innerHTML = PreparationCustom();
    }

    if ( e.target.matches(`${ contact }`) || e.target.matches(`${ contact } *`) ) {
        $renderContent.innerHTML = ContactCustom();
    }

    if ( e.target.matches(`${ duras }`) || e.target.matches(`${ duras } *`) ) {
        $renderContent.innerHTML = HardCustom();
    }
    if ( e.target.matches(`${ blandas }`) || e.target.matches(`${ blandas } *`) ) {
        $renderContent.innerHTML = SoftCustom();
    }
    if ( e.target.matches(`${ materias }`) || e.target.matches(`${ materias } *`) ) {
        $renderContent.innerHTML = SubjectsCustom();
    }
    if ( e.target.matches(`${ impulso }`) || e.target.matches(`${ impulso } *`) ) {
        $renderContent.innerHTML = ImpulseCustom();
    }

}