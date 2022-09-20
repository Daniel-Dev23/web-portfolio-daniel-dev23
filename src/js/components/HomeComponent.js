import HomeHTML from '../../pages/components/Home.html';

export const HomeComponent = () => {

    const $HomeComponent = document.createElement('div');
    $HomeComponent.classList.add('home-container');
    $HomeComponent.innerHTML = HomeHTML;

    return $HomeComponent;

}