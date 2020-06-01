import React from 'react';
import Button from '@material-ui/core/Button'

const MateEx1=()=>{
    return(
        <div>
            <Button variant="outlined">default</Button>
            <Button variant="outlined" color="primary">primary</Button>
            <Button variant="contained" disabled>disabled</Button>
            <Button color="primary" href="http://www.nate.com">Nate Link</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <h3>Size</h3>
            <Button variant="outlined"
            color="secondary" size="small">Secondary Small</Button>
             <Button variant="outlined"
            color="secondary" size="medium">Secondary medium</Button>
            <Button variant="outlined"
            color="secondary" size="large">Secondary Large</Button>
        </div>
    )
}

export default MateEx1;