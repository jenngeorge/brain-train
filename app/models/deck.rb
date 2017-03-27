class Deck < ApplicationRecord
  validates :user_id, :title, :subject_id, presence: true

  belongs_to :user

  belongs_to :subject

  has_many :cards
end
