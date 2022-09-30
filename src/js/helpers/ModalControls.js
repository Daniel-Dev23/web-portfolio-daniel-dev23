export const ModalControls = ( $buttonDetails, $modalContainer, $buttonsClose ) => {

    $buttonDetails.forEach( btnDetail => {
        btnDetail.addEventListener('click', e => {
            
            $modalContainer.forEach( modal => {
                if ( e.target.id === modal.id ) {
                    modal.classList.add('show');
                }
            });

        });
    });

    $buttonsClose.forEach( btnClose => {
        btnClose.addEventListener('click', e => {
            
            $modalContainer.forEach( modal => {
                modal.classList.remove('show');
            });

        });
    });

}