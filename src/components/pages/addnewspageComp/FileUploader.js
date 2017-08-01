import React from 'react';
import PropTypes from 'prop-types';

import {FormControl, ControlLabel} from 'react-bootstrap';

import FileUploader from 'react-firebase-file-uploader';
import database from './../../../database.js'


const FileUploaderComp = ({
    notpostedarticlePropp,
    handleUploadSuccessPropp,
                             handleTextInputPropp
}) => (
    <div>
        <ControlLabel>Bildtext</ControlLabel>
        <FormControl
            type="text"
            placeholder="Bildtext..."
            name="imgheadline"
            value={notpostedarticlePropp.imgheadline}
            onChange={handleTextInputPropp}
        />
    <FileUploader
        accept="image/*"
        name="avatar"
        storageRef={database.storage().ref('images')}
        onUploadSuccess={handleUploadSuccessPropp}
    />
<img src={notpostedarticlePropp.imgURL}/>
    </div>
);

FileUploaderComp.propTypes = {
    notpostedarticlePropp: PropTypes.object,
    handleUploadSuccessPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func
};

export default FileUploaderComp;