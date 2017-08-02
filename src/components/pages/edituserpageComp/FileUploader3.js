'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import { ControlLabel} from 'react-bootstrap';
import FileUploader from 'react-firebase-file-uploader';
import database from './../../../database.js'


const FileUploaderComp3 = ({
                               handleUploadSuccessPropp,

                           }) => (
    <div>
        <ControlLabel>Profilbild</ControlLabel>
        {/*<FormControl
         type="text"
         placeholder="Bildtext..."
         name="imgheadline"
         value={userPropp.imgheadline}
         onChange={handleTextInputPropp}
         />*/}
        <FileUploader
            accept="image/*"
            name="avatar"
            storageRef={database.storage().ref('images')}
            onUploadSuccess={handleUploadSuccessPropp}
        />
    </div>
);

FileUploaderComp3.propTypes = {
    handleUploadSuccessPropp: PropTypes.func,
};

export default FileUploaderComp3;