class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :subjects
  has_many :decks

  has_many :subject_follows
  has_many :followed_subjects,
    through: :subject_follows,
    source: :subject
end
