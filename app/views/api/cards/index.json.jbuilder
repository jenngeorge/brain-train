@cards.each do |card|
  json.set! card.id do
    json.partial! "card", card: card, current_user_id: @current_user_id
  end
end
