
json.deck_id card.deck_id
json.question card.question
json.answer card.answer
json.card_score card.current_user_score(current_user_id)
json.id card.id
json.question_image asset_path(card.question_image.url)
json.answer_image asset_path(card.answer_image.url)
