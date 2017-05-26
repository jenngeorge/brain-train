export const createCard = (formData) => {
  return $.ajax({
    method: 'post',
    url: '/api/cards',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateCard = (formData, id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/cards/${id}`,
    contentType: false,
    processData: false,
    data: formData
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
