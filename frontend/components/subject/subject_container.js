import { connect } from 'react-redux';
import { deleteSubjectFollowIndex,
        fetchSubject } from '../../actions/subject_actions';
import { fetchDecks } from '../../actions/deck_actions';
import SubjectShow from './subject_show';

const mapStateToProps = (state, props) => ({
  subject: state.subjects.byId[props.match.params.subjectId],
  subjects: state.subjects.byId,
  subjectId: props.match.params.subjectId,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  fetchDecks: subjectId => dispatch(fetchDecks(subjectId)),
  deleteSubjectFollowIndex: (subjectId) => dispatch(deleteSubjectFollowIndex(subjectId)),
  fetchSubject: (subjectId) => dispatch(fetchSubject(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectShow);
