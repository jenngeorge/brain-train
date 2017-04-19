# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

octopus_facts = Subject.create!(
  user_id: user1.id,
  title: "Octopus Facts" )

dog_facts = Subject.create!(
  user_id: user1.id,
  title: "Dog Facts" )

neuroscience = Subject.create!(
  user_id: user1.id,
  title: "Neuroscience" )

perception_science = Subject.create!(
  user_id: user1.id,
  title: "Perception Science" )

statistics = Subject.create!(
  user_id: user1.id,
  title: "Statistics"
)

javascript = Subject.create!(
  user_id: user1.id,
  title: "Javascript"
)

cs_history = Subject.create!(
  user_id: user1.id,
  title: "History of Computer Science"
)

cognitive_biases = Subject.create!(
  user_id: user1.id,
  title: "Cognitive Biases"
)

tech_terms = Subject.create!(
  user_id: user1.id,
  title: "Tech Terms"
)

# decks

octopus_physiology = Deck.create!(
  user_id: user1.id,
  title: "Octopus Physiology",
  subject_id: octopus_facts.id
)

octopus_types = Deck.create!(
  user_id: user1.id,
  title: "Octopus Types",
  subject_id: octopus_facts.id
)

dog_breeds = Deck.create!(
  user_id: user1.id,
  title: "Dog Breeds",
  subject_id: dog_facts.id
)

functional_modules = Deck.create!(
  user_id: user1.id,
  title: "Functional Modules",
  subject_id: neuroscience.id
)

neurons = Deck.create!(
  user_id: user1.id,
  title: "Neurons",
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

common_fallacies = Deck.create!(
  user_id: user1.id,
  title: "Common Fallacies",
  subject_id: cognitive_biases.id
)

common_statistical_errors = Deck.create!(
  user_id: user1.id,
  title: "Common Statistical Errors",
  subject_id: cognitive_biases.id
)

landmark_studies = Deck.create!(
  user_id: user1.id,
  title: "Landmark Studies",
  subject_id: cognitive_biases.id
)

# users following subjects
SubjectFollow.create!(user_id: guest.id, subject_id: javascript.id)
SubjectFollow.create!(user_id: guest.id, subject_id: perception_science.id)
SubjectFollow.create!(user_id: guest.id, subject_id: octopus_facts.id)
SubjectFollow.create!(user_id: guest.id, subject_id: neuroscience.id)
