import { connect } from 'react-redux';
import Login from '../components/Login';

import { setToken } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        token: state.token,
        user:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (submitEvent) => dispatch(setToken(submitEvent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);