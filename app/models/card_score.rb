class CardScore < ApplicationRecord
  validates :card_id, :user_id, :score, presence: true
  validates :card_id, uniqueness: {scope: :user_id}

  belongs_to :card
  belongs_to :user
end
