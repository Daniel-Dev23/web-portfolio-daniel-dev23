export const TechnologyComponent = ( project ) => {

    const tech = project.details.technologies;

    let $technology = '';
    tech.forEach( technology => {
        $technology += `
            <div class="tech-item-wrapper">
                <div class="tech-item">
                    <i class="${ technology.icon } tech-item__icon"></i>
                </div>
                <p class="tech-item__title">${ technology.name }</p>
            </div>
        `;
    });

    return $technology;

}
