class CardScore < ApplicationRecord
  validates :card_id, :user_id, :score, presence: true

  belongs_to :card
  belongs_to :user 
end
