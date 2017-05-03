import { connect } from 'react-redux';
import { receiveSubject, deleteSubjectFollow } from '../../actions/subject_actions';
import { fetchDecks } from '../../actions/deck_actions';
import { fetchSubject } from '../../util/subject_api_util';
import SubjectShow from './subject_show';

const mapStateToProps = (state, props) => ({
  subject: state.subjects.byId[props.match.params.subjectId],
  subjects: state.subjects.byId,
  subjectId: props.match.params.subjectId,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  receiveSubject: subject => dispatch(receiveSubject(subject)),
  fetchDecks: subjectId => dispatch(fetchDecks(subjectId)),
  deleteSubjectFollow: (subject_id) => dispatch(deleteSubjectFollow(subject_id)),
  fetchSubject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectShow);
