import React, {PropTypes} from 'react';
import  { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const IndividualUser = ({
                            onSubmitPropp,
                            handleTextInputPropp,
                            handleCheckboxInputPropp,
                            handleSelectInputPropp,
                            userPropp,
                            visiblePropp
                        }) => (visiblePropp === true) ? (
    <Card className="container">
        <form action="/" onSubmit={onSubmitPropp}>
            <h2 className="card-heading">Uppdatera Användare</h2>

            <div className="field-line">
                <TextField
                    floatingLabelText='Användarnamn'
                    name="username"
                    onChange={handleTextInputPropp}
                    value={userPropp.username}
                    hintText="Ange Användarnamn"
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText='Förnamn'
                    hintText="Ange Förnamn"
                    name="firstname"
                    value={userPropp.firstname}
                    onChange={handleTextInputPropp}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText='Efternamn'
                    hintText="Ange Efternamn"
                    value={userPropp.lastname}
                    name="lastname"
                    onChange={handleTextInputPropp}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText='titel'
                    hintText="Ange Titel"
                    value={userPropp.title}
                    name="title"
                    onChange={handleTextInputPropp}
                />
            </div>

            <div>
                <SelectField
                    floatingLabelText='Avdelning'
                    hintText="Välj Avdelning"
                    name="department"
                    value={userPropp.department}
                    onChange={handleSelectInputPropp}
                >
                    <MenuItem value={'Öppenvården'} primaryText="Öppenvården" />
                    <MenuItem value={'HDV'} primaryText="HDV" />
                    <MenuItem value={'Mando Lean'} primaryText="Mando Lean" />
                    <MenuItem value={'IT-Support'} primaryText="IT-Support" />
                </SelectField>
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText='Email'
                    hintText="Ange Email"
                    value={userPropp.email}
                    name="email"
                    onChange={handleTextInputPropp}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText='Lösenord'
                    hintText="Ange Lösenord"
                    value={userPropp.password}
                    type="password"
                    name="password"
                    onChange={handleTextInputPropp}
                />
            </div>

            <div className="field-line">
                <Checkbox
                    label="Admin"
                    checked={userPropp.admin}
                    name="admin"
                    onCheck={handleCheckboxInputPropp}
                    value={userPropp.admin}
                />
            </div>

            <div className="field-line">
                <Checkbox
                    label="Nyhetsadmin"
                    checked={userPropp.newsadmin}
                    name="newsadmin"
                    onCheck={handleCheckboxInputPropp}
                    value={userPropp.newsadmin}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Uppdatera" primary />
                <RaisedButton onTouchTap={null} label="Radera" secondary />
            </div>


            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
    </Card>
) : null;

IndividualUser.propTypes = {
    onSubmitPropp: PropTypes.func.isRequired,
    handleTextInputPropp: PropTypes.func.isRequired,
    handleCheckboxInputPropp: PropTypes.func.isRequired,
    handleSelectInputPropp: PropTypes.func.isRequired,
    userPropp: PropTypes.object.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};

export default IndividualUser;
