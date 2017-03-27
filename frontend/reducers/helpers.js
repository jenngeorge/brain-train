
export const subjectHelper = (subject) => {
  return ({
    title: subject.title,
    deckIds: subject.decks ? Object.keys(subject.decks) : [],
    user_id: subject.user_id
  });
};
