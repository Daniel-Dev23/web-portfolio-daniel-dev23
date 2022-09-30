import * as custom from '../custom/index';

export const SubMenuItems = ( e, $renderContent ) => {

    const who         = '.subnavbar-menu__link--who';
    const preparation = '.subnavbar-menu__link--preparation';
    const contact     = '.subnavbar-menu__link--contact';

    if ( e.target.matches(`${ who }`) || e.target.matches(`${ who } *`) ) {
        $renderContent.innerHTML = custom.WhoCustom();
    }
    if ( e.target.matches(`${ preparation }`) || e.target.matches(`${ preparation } *`) ) {
        $renderContent.innerHTML = custom.PreparationCustom();
    }
    if ( e.target.matches(`${ contact }`) || e.target.matches(`${ contact } *`) ) {
        $renderContent.innerHTML = custom.ContactCustom();
    }

    const duras    = '.subnavbar-menu__link--duras';
    const blandas  = '.subnavbar-menu__link--blandas';
    const materias = '.subnavbar-menu__link--materias';
    const impulso  = '.subnavbar-menu__link--impulso';

    if ( e.target.matches(`${ duras }`) || e.target.matches(`${ duras } *`) ) {
        $renderContent.innerHTML = custom.HardCustom();
    }
    if ( e.target.matches(`${ blandas }`) || e.target.matches(`${ blandas } *`) ) {
        $renderContent.innerHTML = custom.SoftCustom();
    }
    if ( e.target.matches(`${ materias }`) || e.target.matches(`${ materias } *`) ) {
        $renderContent.innerHTML = custom.SubjectsCustom();
    }
    if ( e.target.matches(`${ impulso }`) || e.target.matches(`${ impulso } *`) ) {
        $renderContent.innerHTML = custom.ImpulseCustom();
    }

}