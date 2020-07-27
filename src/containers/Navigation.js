import { connect } from 'react-redux';

import { setToken, unsetToken } from '../redux/actions';

import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
    return {
        token: state.token,
        user:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (submitEvent) => dispatch(setToken(submitEvent)),
        unsetToken: (submitEvent) => dispatch(unsetToken(submitEvent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);