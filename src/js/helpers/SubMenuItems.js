import { WhoCustom } from '../custom/WhoCustom.js';
import { PreparationCustom } from '../custom/PreparationCustom.js';
import { ContactCustom } from '../custom/ContactCustom.js';

export const SubMenuItems = ( e, $renderContent ) => {

    const who         = '.subnavbar-menu__link--who';
    const preparation = '.subnavbar-menu__link--preparation';
    const contact     = '.subnavbar-menu__link--contact';

    if ( e.target.matches(`${ who }`) || e.target.matches(`${ who } *`) ) {
        $renderContent.innerHTML = WhoCustom();
    }

    if ( e.target.matches(`${ preparation }`) || e.target.matches(`${ preparation } *`) ) {
        $renderContent.innerHTML = PreparationCustom();
    }

    if ( e.target.matches(`${ contact }`) || e.target.matches(`${ contact } *`) ) {
        $renderContent.innerHTML = ContactCustom();
    }

}