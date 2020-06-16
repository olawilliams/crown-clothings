import React from 'react';

import { SpinnerContainer, SpinnerOverlay} from '../withspinner/with-spinner-styled';

const Spinners = () => (
    <div>
        <SpinnerOverlay>
            < SpinnerContainer />
        </SpinnerOverlay>
    </div>
);

export default Spinners;