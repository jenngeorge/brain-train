import { connect } from 'react-redux';
import { deleteSubjectFollow,
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
  deleteSubjectFollow: (subjectId) => dispatch(deleteSubjectFollow(subjectId)),
  fetchSubject: (subjectId) => dispatch(fetchSubject(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectShow);
