import React from 'react';
import PropTypes from 'prop-types';


import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox} from 'react-bootstrap';

const IndividualUser = ({
                            onSubmitPropp,
                            handleTextInputPropp,
                            handleCheckboxInputPropp,
                            handleSelectInputPropp,
                            handleDeletePropp,
                            userPropp,
                            oldusernamePropp,
                            visiblePropp
                        }) => (visiblePropp === true) ? (
<form onSubmit={onSubmitPropp} name="updateuser">
    <FormGroup
        controlId="formBasicText"
        validationState={null}
    >

        <ControlLabel>Användare</ControlLabel>
        <FormControl.Static>
            {oldusernamePropp}
        </FormControl.Static>

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

        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
        <Button
            className="btn btn-primary btn-large centerButton"
            type="submit"
        >Uppdatera</Button>
        <Button
            className="btn btn-danger btn-large centerButton"
            onClick={handleDeletePropp}
        >Radera</Button>


    </FormGroup>
</form>) : null;

IndividualUser.propTypes = {
    onSubmitPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func,
    handleCheckboxInputPropp: PropTypes.func,
    handleSelectInputPropp: PropTypes.func,
    handleDeletePropp: PropTypes.func,
    userPropp: PropTypes.object,
    oldusernamePropp: PropTypes.string,
    visiblePropp: PropTypes.bool
};

export default IndividualUser;