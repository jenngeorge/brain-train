
export const subjectHelper = (subject) => {
  let subjectFollowId = false;
  if (subject.following && subject.following[currentUser.id]){
    subjectFollowId = subject.following[currentUser.id].follow_id;
  }
  return ({
    title: subject.title,
    deckIds: subject.decks ? Object.keys(subject.decks) : [],
    user_id: subject.user_id,
    followId: subjectFollowId
  });
};
