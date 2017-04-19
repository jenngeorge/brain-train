class Subject < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user

  has_many :decks, dependent: :destroy

  has_many :subject_follows
  has_many :following_users,
    through: :subject_follows,
    source: :user

end
