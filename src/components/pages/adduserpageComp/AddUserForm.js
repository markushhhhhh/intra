import React, { PropTypes } from 'react';
import  { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AddUserForm = ({
                        onSubmitPropp,
                        handleTextInputPropp,
                        handleCheckboxInputPropp,
                        handleSelectInputPropp,
                        errorsPropp,
                        userPropp,
                        visiblePropp,
                    }) => (visiblePropp===true) ?

    (    <Card className="container">
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
    </Card>
) : null;

AddUserForm.propTypes = {
    onSubmitPropp: PropTypes.func.isRequired,
    handleTextInputPropp: PropTypes.func.isRequired,
    handleCheckboxInputPropp: PropTypes.func.isRequired,
    handleSelectInputPropp: PropTypes.func.isRequired,
    errorsPropp: PropTypes.object.isRequired,
    userPropp: PropTypes.object.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};

export default AddUserForm;