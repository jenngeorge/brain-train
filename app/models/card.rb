class Card < ApplicationRecord
    validates :deck_id, :question, :answer, presence: true

    has_many :card_scores
    belongs_to :deck

    def current_user_score(current_user_id)
      card_score = self.card_scores.where(user_id: current_user_id)[0]
      if card_score
        return {score: card_score.score, id: card_score.id}
      else
        new_score = CardScore.create!(card_id: self.id, user_id: current_user_id)
        return {score: new_score.score, id: new_score.id}
      end
    end
end
