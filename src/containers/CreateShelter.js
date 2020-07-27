import { connect } from 'react-redux';

import { setToken } from '../redux/actions';
import CreateShelter from '../components/CreateShelter';

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateShelter);