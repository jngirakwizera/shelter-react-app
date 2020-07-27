import { connect } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';

//import { setToken } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        setToken: (submitEvent) => dispatch(setToken(submitEvent)),
//    }
//}

export default connect(mapStateToProps)(ProtectedRoute);