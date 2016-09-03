import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const Headline = (props) => {
    return (
        <TextField
            hintText="תמצית חדשה"
            floatingLabelText="הכנס כותרת תמצית"
            fullWidth={true}
        />
    )
}

export default Headline
