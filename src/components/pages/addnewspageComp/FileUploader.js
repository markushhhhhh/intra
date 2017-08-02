'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {FormControl, ControlLabel} from 'react-bootstrap';

//imported to handle the file upload
import FileUploader from 'react-firebase-file-uploader';

//imports access to the database
import database from './../../../database.js'

//Creates the FileUploaderComponent, its parent is AddNewsPageComponent
const FileUploaderComp = ({
                              //Properties that is attached to the component from its parent
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

//Properties that is attached to the component from its parent. This makes sure the properties are the correct format
FileUploaderComp.propTypes = {
    notpostedarticlePropp: PropTypes.object,
    handleUploadSuccessPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func
};

export default FileUploaderComp;