import { connect } from 'react-redux';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import { createSubject, updateSubject, deleteSubject } from '../../util/subject_api_util';
import { receiveSubject, removeSubject } from '../../actions/subject_actions';
import SubjectForm from './subject_form';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  subjects: state.subjects.byId,
  allSubjectIds: state.subjects.allIds,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createSubject,
  updateSubject,
  deleteSubject,
  receiveSubject: subject => dispatch(receiveSubject(subject)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: err => dispatch(receiveErrors(err)),
  removeSubject: subjectId => dispatch(removeSubject(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectForm);
