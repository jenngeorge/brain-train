import * as APIUtil from '../util/subject_api_util';
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_SUBJECT = "RECEIVE_SUBJECT";
export const RECEIVE_SUBJECTS = "RECEIVE_SUBJECTS";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";

// export const createSubject = subject => dispatch => (
//   APIUtil.createSubject(subject)
//     .then(createdSubject => dispatch(receiveSubject(createdSubject)),
//       err => dispatch(receiveErrors(err.responseJSON)))
// );


export const updateSubject = subject => dispatch => (
  APIUtil.updateSubject(subject)
    .then(updatedSubject => dispatch(receiveSubject(updatedSubject)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveSubject = subject => ({
  type: RECEIVE_SUBJECT,
  subject
});

// export const fetchSubject = subjectId => dispatch => (
//   APIUtil.fetchSubject(subjectId)
//     .then(subject => dispatch(receiveSubject(subject)),
//       err => dispatch(receiveErrors(err.resposneJSON)))
// );

export const fetchSubjects = () => dispatch => (
  APIUtil.fetchSubjects()
    .then(subjects => dispatch(receiveSubjects(subjects)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveSubjects = subjects => ({
  type: RECEIVE_SUBJECTS,
  subjects
});

export const removeSubject = subjectId => ({
  type: REMOVE_SUBJECT,
  subjectId
});

// export const deleteSubject = subjectId => dispatch => (
//   APIUtil.deleteSubject(subjectId)
//     .then(() => dispatch(removeSubject(subjectId))),
//       err => dispatch(receiveErrors(err.responseJSON))
// );
