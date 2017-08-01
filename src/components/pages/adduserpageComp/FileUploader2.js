import React from 'react';
import PropTypes from 'prop-types';

import {FormControl, ControlLabel} from 'react-bootstrap';
import FileUploader from 'react-firebase-file-uploader';
import database from './../../../database.js'


const FileUploaderComp2 = ({
                              userPropp,
                              handleUploadSuccessPropp,
                              handleTextInputPropp
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
        <img src={userPropp.profileimgURL}/>
    </div>
);

FileUploaderComp2.propTypes = {
    userPropp: PropTypes.object,
    handleUploadSuccessPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func
};

export default FileUploaderComp2;