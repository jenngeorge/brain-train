import { connect } from 'react-redux';
import { signin, signout, signup, clearErrors} from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = (state) => ({
  session: state.session,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
