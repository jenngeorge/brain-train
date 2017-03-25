import { connect } from 'react-redux';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import { createSubject, updateSubject } from '../../util/subject_api_util';
import { receiveSubject } from '../../actions/subject_actions';
import SubjectForm from './subject_form';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  subjects: state.subjects.byId,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createSubject,
  updateSubject,
  receiveSubject: subject => dispatch(receiveSubject(subject)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: err => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectForm);
