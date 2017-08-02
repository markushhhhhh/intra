'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import { ControlLabel} from 'react-bootstrap';

//imported to handle the file upload
import FileUploader from 'react-firebase-file-uploader';

//imports access to the database
import database from './../../../database.js'

//Creates the FileUploaderComponent, its parent is AddUserPageComponent
const FileUploaderComp2 = ({
                               //Properties that is attached to the component from its parent
                               userPropp,
                              handleUploadSuccessPropp,
                              handleTextInputPropp
                          }) => (
    <div>
        <ControlLabel>Profilbild</ControlLabel>
        <FileUploader
            accept="image/*"
            name="avatar"
            storageRef={database.storage().ref('images')}
            onUploadSuccess={handleUploadSuccessPropp}
        />
        <img src={userPropp.profileimgURL}/>
    </div>
);

//Properties that is attached to the component from its parent. This makes sure the properties are the correct format
FileUploaderComp2.propTypes = {
    userPropp: PropTypes.object,
    handleUploadSuccessPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func
};

export default FileUploaderComp2;