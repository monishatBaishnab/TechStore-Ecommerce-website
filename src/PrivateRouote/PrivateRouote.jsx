import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouote = ({children}) => {
    const {user, userLoading} = useContext(AuthContext);
    if(userLoading === true){
        return children;
    }
    if(user === null){
        return <Navigate to='/login' />;
    }
    return children;
};

PrivateRouote.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouote;