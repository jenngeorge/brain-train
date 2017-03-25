import { connect } from 'react-redux';
import { fetchSubjects } from '../../actions/subject_actions';
import SubjectIndex from './subject_index';

const mapStateToProps = (state) => ({
  subjects: state.subjects.byId
});

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(fetchSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
