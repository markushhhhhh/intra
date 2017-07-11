import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router';

const style = {
    margin: 12,
    width: 400
};

const AdminPageRaisedButtons = ({
                                   renderAddUserPagePropp,
                                   renderAddUserFormPropp,
                                   renderComponentPropp,
                                    unrenderComponentPropp,
                                    renderPropp
                                }) => (
    <div>
        <Link to={'/admin'}>
            <RaisedButton label="Lägg Till Användare" style={style} onTouchTap={() => renderPropp('RENDER_ADDUSER')} />
        </Link>
        <Link to={'/edituser'}>
            <RaisedButton label="Ändra/Radera Användare" primary={true} style={style} onTouchTap={() => renderPropp('RENDER_USERLIST')}/>
        </Link>
        <br />
        <br />
    </div>
);

AdminPageRaisedButtons.propTypes = {
    renderAddUserPagePropp: PropTypes.func.isRequired,
    renderAddUserFormPropp: PropTypes.func.isRequired,
    renderComponentPropp: PropTypes.func.isRequired,
    unrenderComponentPropp: PropTypes.func.isRequired,
    renderPropp: PropTypes.func.isRequired
};

export default AdminPageRaisedButtons;