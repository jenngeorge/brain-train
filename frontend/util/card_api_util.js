export const createCard = (card) => {
  return $.ajax({
    method: 'post',
    url: '/api/cards',
    data: card
  });
};

export const updateCard = (card, id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/cards/${id}`,
    data: card
  });
};

export const deleteCard = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/cards/${id}`
  });
};

export const fetchCard = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/cards/${id}`
  });
};

export const fetchCards = (id) => {
  return $.ajax({
    method: "get",
    url: "/api/cards",
    data: {deckId: id}
  });
};

// card scores

export const createCardScore = (card_score) => {
  return $.ajax({
    method: 'post',
    url: '/api/card_scores',
    data: card_score
  });
};

export const updateCardScore = (card_score, id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/card_scores/${id}`,
    data: card_score
  });
};
