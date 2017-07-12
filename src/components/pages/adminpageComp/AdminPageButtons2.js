import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';


const AdminPageButtons2 = ({
                              renderPropp
                           }) => (
    <ButtonGroup>
        <Button
            onClick={() => renderPropp('RENDER_USERLIST')}
        >Redigera Användare</Button>
        <Button
            onClick={() => renderPropp('RENDER_ADDUSERFORM')}
        >Lägg Till Användare</Button>
    </ButtonGroup>
);


/*const style = {
    margin: 12,
    width: 400
};*/

/*const AdminPageButtons2 = ({
                                }) => (
    <div>
        <Link to={'/users'}>
            <RaisedButton label="Användare" style={style} />
        </Link>
        <Link to={'/editnews'}>
            <RaisedButton label="Nyheter" primary={true} style={style} />
        </Link>
    </div>
);*/

AdminPageButtons2.propTypes = {
renderPropp: PropTypes.func.isRequired
};

export default AdminPageButtons2;