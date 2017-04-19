class SubjectFollow < ApplicationRecord
  validates :user_id, :subject_id, presence: true
  validates_uniqueness_of :user_id, scope: :subject_id

  belongs_to :user
  belongs_to :subject
end
