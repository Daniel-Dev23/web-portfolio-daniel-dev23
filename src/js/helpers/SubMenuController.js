import { SubMenuItems } from "./SubMenuItems";

export const SubMenuController = ( $subMenuLinks, $renderContent ) => {

    $subMenuLinks.forEach(subLink => {
        subLink.addEventListener('click', e => {
            $subMenuLinks.forEach( item => item.classList.remove('active-sub') );
            subLink.classList.add('active-sub');
            
            SubMenuItems( e, $renderContent );
        });
    });

}