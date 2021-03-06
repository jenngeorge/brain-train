export const createDeck = (deck) => {
  return $.ajax({
    method: 'post',
    url: '/api/decks',
    data: deck
  });
};

export const updateDeck = (deck, id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/decks/${id}`,
    data: deck
  });
};

export const deleteDeck = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/decks/${id}`
  });
};

export const fetchDeck = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/decks/${id}`
  });
};

export const fetchDecks = (id) => {
  return $.ajax({
    method: "get",
    url: "/api/decks",
    data: {subjectId: id}
  });
};
