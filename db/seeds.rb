require 'active_support/inflector'
require_relative './seed_helper'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy all Users, Subjects, SubjectFollows, Decks, Cards
User.destroy_all
Subject.destroy_all
SubjectFollow.destroy_all
Deck.destroy_all
Card.destroy_all

#Users
user1 = User.create!(email: "u1@email.com", password: "password")
user2 = User.create!(email: "u2@email.com", password: "password")
user3 = User.create!(email: "u3@email.com", password: "password")
user4 = User.create!(email: "u4@email.com", password: "password")
user5 = User.create!(email: "u5@email.com", password: "password")
user6 = User.create!(email: "u6@email.com", password: "password")
user7 = User.create!(email: "u7@email.com", password: "password")
guest = User.create!(email: "guest@email.com", password: "password")

#subjects -- take from old study guides

neuroscience = Subject.create!(
  user_id: user1.id,
  title: "Neuroscience" )

perception_science = Subject.create!(
  user_id: user1.id,
  title: "Perception Science" )

cognitive_science = Subject.create!(
  user_id: user1.id,
  title: "Cognitive Science"
)

spanish = Subject.create!(
  user_id: user1.id,
  title: "Spanish"
)

cantonese = Subject.create!(
  user_id: user1.id,
  title: "Cantonese"
)

marine_life = Subject.create!(
  user_id: user1.id,
  title: "Marine Life"
)

# users following subjects
SubjectFollow.create!(user_id: guest.id, subject_id: perception_science.id)
SubjectFollow.create!(user_id: guest.id, subject_id: neuroscience.id)
SubjectFollow.create!(user_id: guest.id, subject_id: cognitive_science.id)
SubjectFollow.create!(user_id: guest.id, subject_id: spanish.id)
SubjectFollow.create!(user_id: guest.id, subject_id: cantonese.id)
SubjectFollow.create!(user_id: guest.id, subject_id: marine_life.id)

# decks

functional_modules = Deck.create!(
  user_id: user1.id,
  title: "Functional Modules",
  subject_id: neuroscience.id
)

muscles = Deck.create!(
  user_id: user1.id,
  title: "Muscles",
  subject_id: neuroscience.id
)

sleep = Deck.create!(
  user_id: user1.id,
  title: "Sleep",
  subject_id: neuroscience.id
)

memory = Deck.create!(
  user_id: user1.id,
  title: "Memory",
  subject_id: neuroscience.id
)

visual_system = Deck.create!(
  user_id: user1.id,
  title: "Visual System",
  subject_id: perception_science.id
)

taste = Deck.create!(
  user_id: user1.id,
  title: "Taste",
  subject_id: perception_science.id
)

auditory_system = Deck.create!(
  user_id: user1.id,
  title: "Auditory System",
  subject_id: perception_science.id
)

touch = Deck.create!(
  user_id: user1.id,
  title: "Touch",
  subject_id: perception_science.id
)

linguistics = Deck.create!(
  user_id: user1.id,
  title: "Linguistics",
  subject_id: cognitive_science.id
)

perception_modules = Deck.create!(
  user_id: user1.id,
  title: "Perception Modules",
  subject_id: cognitive_science.id
)

# spanish decks

common_phrases = Deck.create!(
  user_id: user1.id,
  title: "Common Phrases",
  subject_id: spanish.id
)

school = Deck.create!(
  user_id: user1.id,
  title: "School",
  subject_id: spanish.id
)

places = Deck.create!(
  user_id: user1.id,
  title: "Places",
  subject_id: spanish.id
)

business = Deck.create!(
  user_id: user1.id,
  title: "Business",
  subject_id: spanish.id
)

transportation = Deck.create!(
  user_id: user1.id,
  title: "Transportation",
  subject_id: spanish.id
)

house = Deck.create!(
  user_id: user1.id,
  title: "House",
  subject_id: spanish.id
)

body_and_clothing = Deck.create!(
  user_id: user1.id,
  title: "Body and Clothing",
  subject_id: spanish.id
)

# canto decks
numbers = Deck.create!(
  user_id: user1.id,
  title: "Numbers",
  subject_id: cantonese.id
)

common_phrases = Deck.create!(
  user_id: user1.id,
  title: "Common Phrases",
  subject_id: cantonese.id
)

feelings = Deck.create!(
  user_id: user1.id,
  title: "Feelings",
  subject_id: cantonese.id
)

restaurant_phrases = Deck.create!(
  user_id: user1.id,
  title: "Restaurant Phrases",
  subject_id: cantonese.id
)

activities = Deck.create!(
  user_id: user1.id,
  title: "Activities",
  subject_id: cantonese.id
)


# marine life decks

octopuses = Deck.create!(
  user_id: user1.id,
  title: "Octopuses",
  subject_id: marine_life.id
)

jellyfish = Deck.create!(
  user_id: user1.id,
  title: "Jellyfish",
  subject_id: marine_life.id
)

# create cards for each deck from card txt files
decks = Deck.all
decks.each do |deck|
  subject = deck.subject.title.parameterize(separator: '_')
  deck_title = deck.title.parameterize(separator: '_')
  cards = read_cards("db/cards/#{subject}/#{deck_title}.txt")
  cards.each do |card|
    Card.create!(
      deck_id: deck.id,
      question: card["question"],
      question_image: card["question_image"],
      answer: card["answer"],
      answer_image: card["answer_image"]
    )
  end
end



# cogneuro

#intro to cogsci https://quizlet.com/32894119/cogsci-lastmin-final-flash-cards/

#neuro https://quizlet.com/32730813/mcb-64-final-flash-cards/

#langthought
