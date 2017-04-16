class Card < ApplicationRecord
    validates :deck_id, :question, :answer, presence: true

    has_many :card_scores
    belongs_to :deck
end
