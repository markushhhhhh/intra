'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import { ControlLabel, FormControl, Checkbox} from 'react-bootstrap';

//Creates the AddUserFormComponent, its parent is AddUserPageComponent
const AddUserForm2 = ({
                          //Properties that is attached to the component from its parent
                          onSubmitPropp,
                         handleTextInputPropp,
                         handleCheckboxInputPropp,
                         handleSelectInputPropp,
                         userPropp,
                     }) =>  (
        <form  name="adduser">

                <ControlLabel>Användarnamn</ControlLabel>
                <FormControl
                    type="text"
                    name="username"
                    value={userPropp.username}
                    placeholder="Ange Användarnamn"
                    onChange={handleTextInputPropp}
                />


                <ControlLabel>Förnamn</ControlLabel>
                <FormControl
                    type="text"
                    name="firstname"
                    value={userPropp.firstname}
                    placeholder="Ange Förnamn"
                    onChange={handleTextInputPropp}
                />

                <ControlLabel>Efternamn</ControlLabel>
                <FormControl
                    type="text"
                    name="lastname"
                    value={userPropp.lastname}
                    placeholder="Ange Efternamn"
                    onChange={handleTextInputPropp}
                />

                <ControlLabel>Titel</ControlLabel>
                <FormControl
                    type="text"
                    name="title"
                    value={userPropp.title}
                    placeholder="Ange Titel"
                    onChange={handleTextInputPropp}
                />


                <ControlLabel>Avdelning</ControlLabel>
                <FormControl componentClass="select"
                             placeholder="Välj Avdelning"
                             name="department"
                             value={userPropp.department}
                             onChange={handleSelectInputPropp}
                >
                    <option value=''>Välj</option>
                    <option value='Öppenvården'>Öppenvården</option>
                    <option value="HDV">HDV</option>
                    <option value="Mando Lean">Mando Lean</option>
                    <option value="IT">IT</option>
                </FormControl>

                <ControlLabel>Email</ControlLabel>
                <FormControl
                    type="email"
                    placeholder="Ange Email"
                    name="email"
                    value={userPropp.email}
                    onChange={handleTextInputPropp}
                />

                <ControlLabel>Lösenord</ControlLabel>
                <FormControl
                    type="password"
                    placeholder="Ange Lösenord"
                    name="password"
                    value={userPropp.password}
                    onChange={handleTextInputPropp}
                />

                <Checkbox label="Admin"
                          checked={userPropp.admin}
                          name="admin"
                          onChange={handleCheckboxInputPropp}
                          value={userPropp.admin}>
                    Admin
                </Checkbox>

                <Checkbox label="Nyhetsadmin"
                          checked={userPropp.newsadmin}
                          name="newsadmin"
                          onChange={handleCheckboxInputPropp}
                          value={userPropp.newsadmin}>
                    Nyhetsadmin
                </Checkbox>



        </form>
    );

//Properties that is attached to the component from its parent. This makes sure the properties are the correct format
AddUserForm2.propTypes = {
    onSubmitPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func,
    handleCheckboxInputPropp: PropTypes.func,
    handleSelectInputPropp: PropTypes.func,
    userPropp: PropTypes.object,
};

export default AddUserForm2;