json.extract! subject, :title, :user_id

json.decks do
  subject.decks.each do |deck|
    json.set! deck.id do
      json.id deck.id
      json.title deck.title
      json.user_id deck.user_id
      json.subject_id deck.subject_id
    end
  end
end

json.following do
  subject_follows.each do |subject_follow|
    json.set! subject_follow.user_id do
      json.follow_id subject_follow.id
    end
  end
end
