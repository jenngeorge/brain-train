import { connect } from 'react-redux';
import { fetchSubjects,
        createSubjectFollow,
        deleteSubjectFollow } from '../../actions/subject_actions';
import { fetchDecks } from '../../actions/deck_actions';

import Search from './search.jsx';


const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  subjects: state.subjects.byId,
  decks: state.decks.byId
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: search => dispatch(fetchSubjects(search)),
  createSubjectFollow: subjectId => dispatch(createSubjectFollow(subjectId)),
  deleteSubjectFollow: subjectId => dispatch(deleteSubjectFollow(subjectId)),
  fetchDecks: () => dispatch(fetchDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
