import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router';

const style = {
    margin: 12,
    width: 400
};

const AdminPageButtons2 = ({
                                }) => (
    <div>
        <Link to={'/users'}>
            <RaisedButton label="Användare" style={style} />
        </Link>
        <Link to={'/editnews'}>
            <RaisedButton label="Nyheter" primary={true} style={style} />
        </Link>
    </div>
);

AdminPageButtons2.propTypes = {

};

export default AdminPageButtons2;