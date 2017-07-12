import React, { PropTypes } from 'react';
import  { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox} from 'react-bootstrap';


const AddUserForm2 = ({
                         onSubmitPropp,
                         handleTextInputPropp,
                         handleCheckboxInputPropp,
                         handleSelectInputPropp,
                         userPropp,
                         visiblePropp,
                     }) => (visiblePropp===true) ? (
        <form onSubmit={onSubmitPropp} name="adduser">
            <FormGroup
                controlId="formBasicText"
                validationState={null}
            >
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
                <Button className="btn btn-primary btn-large centerButton" type="submit">Skapa Ny Användare</Button>

            </FormGroup>
        </form>

        /*<Card className="container">
            <form action="/" onSubmit={onSubmitPropp}>
                <h2 className="card-heading">Lägg till Användare</h2>

                {errorsPropp.summary && <p className="error-message">{errorsPropp.summary}</p>}

                <div className="field-line">
                    <TextField
                        floatingLabelText="Användarnamn"
                        name="username"
                        errorText={errorsPropp.username}
                        onChange={handleTextInputPropp}
                        value={userPropp.username}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        floatingLabelText="Namn"
                        name="firstname"
                        errorText={errorsPropp.firstname}
                        onChange={handleTextInputPropp}
                        value={userPropp.firstname}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        floatingLabelText="Efternamn"
                        name="lastname"
                        errorText={errorsPropp.lastname}
                        onChange={handleTextInputPropp}
                        value={userPropp.lastname}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        floatingLabelText="Titel"
                        name="title"
                        errorText={errorsPropp.title}
                        onChange={handleTextInputPropp}
                        value={userPropp.title}
                    />
                </div>

                <div>
                    <SelectField
                        floatingLabelText="Avdelning"
                        name="department"
                        errorText={errorsPropp.department}
                        value={userPropp.department}
                        onChange={handleSelectInputPropp}
                    >
                        <MenuItem value={'Öppenvården'} primaryText="Öppenvården" />
                        <MenuItem value={'HDV'} primaryText="HDV" />
                        <MenuItem value={'Mando Lean'} primaryText="Mando Lean" />
                    </SelectField>
                </div>

                <div className="field-line">
                    <TextField
                        floatingLabelText="Email"
                        name="email"
                        errorText={errorsPropp.email}
                        onChange={handleTextInputPropp}
                        value={userPropp.email}
                    />
                </div>

                <div className="field-line">
                    <TextField
                        floatingLabelText="Lösenord"
                        type="password"
                        name="password"
                        onChange={handleTextInputPropp}
                        errorText={errorsPropp.password}
                        value={userPropp.password}
                    />
                </div>

                <div className="field-line">
                    <Checkbox
                        label="Admin"
                        name="admin"
                        onCheck={handleCheckboxInputPropp}
                        value={userPropp.admin}
                    />
                </div>

                <div className="field-line">
                    <Checkbox
                        label="Nyhetsadmin"
                        name="newsadmin"
                        onCheck={handleCheckboxInputPropp}
                        value={userPropp.newsadmin}
                    />
                </div>

                <div className="button-line">
                    <RaisedButton type="submit" label="Create New User" primary />
                </div>

                <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
            </form>
        </Card>*/
    ) : null;

AddUserForm2.propTypes = {
    onSubmitPropp: PropTypes.func.isRequired,
    handleTextInputPropp: PropTypes.func.isRequired,
    handleCheckboxInputPropp: PropTypes.func.isRequired,
    handleSelectInputPropp: PropTypes.func.isRequired,
    userPropp: PropTypes.object.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};

export default AddUserForm2;