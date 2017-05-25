import { connect } from 'react-redux';
import { fetchSubjects } from '../../actions/subject_actions';
import SubjectIndex from './subject_index';

const mapStateToProps = (state, props) => ({
  subjects: state.subjects.byId,
  subjectIds: state.subjects.allIds,
  selectedSubject: props.selectedSubject
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(fetchSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
