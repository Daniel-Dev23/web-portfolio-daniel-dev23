import { CardComponent } from './CardComponent';

const projects = require('../../../json/projects.json');

export const RenderCards = ( $cardsWrapper ) => {

    projects.forEach( project => {
        
        $cardsWrapper.innerHTML += `${ CardComponent( project ) }`;
        
    });

}