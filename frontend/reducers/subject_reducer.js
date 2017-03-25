import {RECEIVE_SUBJECT,
        RECEIVE_SUBJECTS,
        REMOVE_SUBJECT} from '../actions/subject_actions';
import {merge, omit} from 'lodash';

const SubjectReducer = (state = {byId: {}, allIds:[]}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SUBJECT:
      newState.allIds.push(action.subject.id);
      newState.byId[action.subject.id] = action.subject;
      return newState;
    case RECEIVE_SUBJECTS:
      let byId = action.subjects;
      let allIds = Object.keys(action.subjects);
      return {byId, allIds};
    case REMOVE_SUBJECT:
      newState = omit(newState.byId, action.subjectId);
      let idx = newState.allIds.indexOf(action.subjectId);
      newState.allIds.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};


export default SubjectReducer;
