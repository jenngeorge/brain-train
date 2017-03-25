import { connect } from 'react-redux';
import { receiveSubject } from '../../actions/subject_actions';
import { fetchSubject } from '../../util/subject_api_util';
import SubjectShow from './subject_show';

const mapStateToProps = (state, props) => ({
  subject: state.subjects.byId[props.match.params.subjectId],
  subjectId: props.match.params.subjectId
});


const mapDispatchToProps = dispatch => ({
  receiveSubject: subject => dispatch(receiveSubject(subject)),
  fetchSubject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectShow);
