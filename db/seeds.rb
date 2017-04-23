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

cognitive_science = Subject.create!(
  user_id: user1.id,
  title: "Cognitive Science"
)

# users following subjects
SubjectFollow.create!(user_id: guest.id, subject_id: javascript.id)
SubjectFollow.create!(user_id: guest.id, subject_id: perception_science.id)
SubjectFollow.create!(user_id: guest.id, subject_id: octopus_facts.id)
SubjectFollow.create!(user_id: guest.id, subject_id: neuroscience.id)
SubjectFollow.create!(user_id: guest.id, subject_id: cognitive_science.id)

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

social_cognition = Deck.create!(
  user_id: user1.id,
  title: "Lankmark Studies",
  subject_id: cognitive_science.id
)

linguistics = Deck.create!(
  user_id: user1.id,
  title: "Linguistics",
  subject_id: cognitive_science.id
)

perception_modules = Deck.create!(
  user_id: user1.id,
  title: "Cognitive Modules: Perception",
  subject_id: cognitive_science.id
)

cog_neuro = Deck.create!(
  user_id: user1.id,
  title: "Cognitive Neuroscience",
  subject_id: neuroscience.id
)

Card.create!(
  deck_id: social_cognition.id,
  question: "a subdiscipline of psychology, is concerned with cognitive structures and processes. The domain of cognition ranges very widely.",
  answer: "Cognitive psychology")

Card.create!(
  deck_id: social_cognition.id,
  question: "the formation of a mental representation of the stimulus situation. Information must be extracted from the stimulus, and then combined with information retrieved from memory. This process is sometimes known as impression formation.",
  answer: "Social perception")

Card.create!(
  deck_id: social_cognition.id,
  question: "concerns the acquisition, storage, and retrieval of social knowledge. Social memory is often studied in the form of person memory, or our memory for the characteristics and behaviors of other people.",
  answer: "Social memory")

Card.create!(
  deck_id: social_cognition.id,
  question: "nonsocial domain, memory is often classified as declarative or procedural, episodic or semantic. The same classifications can apply in the social domain. Person memory is episodic memory about other people, while autobiographical memory is episodic memory about oneself.",
  answer: "memory types")

Card.create!(
  deck_id: social_cognition.id,
  question: "an appreciation that others have beliefs and mental states that may differ from the child's own. In this sense, the theory of mind is essentially social in nature.",
  answer: "theory of mind - child development")

Card.create!(
  deck_id: social_cognition.id,
  question: "-perception: we go 'beyond the information given' by the stimulus to construct a mental representation of the environment based on inferences from world-knowledge (JS Bruner)
-memory: reconstruct events -- again, based as much on inference than on retrieval (FC Bartlett)
-cognition = creating reality",
  answer: "Social Constructivism: perception/memory")

Card.create!(
  deck_id: social_cognition.id,
  question: "Individuals create the reality to which they respond, by processes such as the self-fulfilling prophecy. For example, a person who believes that another person is hostile may behave in such a manner as to elicit hostile behavior from that person.",
  answer: "Cognitive constructivism")

Card.create!(
  deck_id: social_cognition.id,
  question: "larger social entities also create reality, through the exercise of collective intentionality. For example, money and marriage are real things; but they exist only because people bring them into existence through acts of thought.",
  answer: "Social constructivism")

Card.create!(
  deck_id: social_cognition.id,
  question: "social cognition blurs the distinction between subject and object. In nonsocial cognition, there is the subject -- the one who does the perceiving, or remembering, or thinking; and there is the object -- the thing that is perceived, remembered, or thought. But when we think of ourselves, we are simultaneously knower and the object of knowledge",
  answer: "social vs nonsocial cognition difference")

Card.create!(
  deck_id: social_cognition.id,
  question: "-E Goffman on intelligence transaction
-I'm trying to fool you. You realize that I'm trying to fool you, and I -- realizing that -- try to fool you into thinking that I don't realize that you have realized that I am trying to fool you. Goffman argues that at each turn in the game the parties seek out more and more specific and reliable cues to the other's intentions. But that search for specificity and reliability only makes the problem worse.",
  answer: "expression game.")

Card.create!(
  deck_id: social_cognition.id,
  question: "-mind was made of an immaterial substance
-humans have minds, animals operate soley by physiological mechanisms like the reflex",
  answer: "Descartes' substance dualism")

Card.create!(
  deck_id: social_cognition.id,
  question: "detailed the psychological principles by which visual perception operated, in the context of the principles of physiology and the physical laws of optics
-measured speed of a neural impulse",
  answer: "Physiological Optics (1856-1867), Helmholtz")

Card.create!(
  deck_id: social_cognition.id,
  question: "an experimental, quantitative psychology had to be limited to `immediate` experience, by which he meant sensation and perception.",
  answer: "Wundt")

Card.create!(
  deck_id: social_cognition.id,
  question: "pioneered `mental measurement`, pertaining to elementary sensory and perceptual functions, and reaction time, and developed techniques of regression and correlation (1886).",
  answer: "Galton (1883)")


Card.create!(
  deck_id: social_cognition.id,
  question: "-Naturwissenschaft- including studies of sensation and perception
-Geisteswissenschaft including everything else
- experimental psychology- could be accomplished in the laboratory
- Volkerpsycholgie-had to be based on uncontrolled field studies",
  answer: "Wundt's distinctions in social psych")

Card.create!(
  deck_id: social_cognition.id,
  question: "attributed the individual's behavior in a particular situation to his beliefs about that situation",
  answer: "Theodore Newcomb")

Card.create!(
  deck_id: social_cognition.id,
  question: "`the free inner man who is held responsible for the behavior of the external biological organism is only a prescientific substitute for the kinds of causes which are discovered in the course of a scientific analysis. All these alternative causes lie outside the individual`",
  answer: "Skinner - Doctrine of Situationism")

# linguistics cards
Card.create!(
 deck_id: linguistics.id,
 question: "made with both lips [Peer] [Bin] [Month]",
 answer: "bilabial articulation"
)

Card.create!(
 deck_id: linguistics.id,
 question: "involve lower lip and upper teeth [Fire] [Vow]",
 answer: "labiodental articulation"
)

Card.create!(
 deck_id: linguistics.id,
 question: "when tongue touches or is brought near the alveolar ridge; at the beginning of English words [Top] [Deer] [Soap] [Zip] [Lip] [Neck]",
 answer: "alveolar sounds"
)

Card.create!(
 deck_id: linguistics.id,
 question: "Show, meaSure, Chip, JuDGe",
 answer: "alveopalatal consonants examples"
)

Card.create!(
 deck_id: linguistics.id,
 question: "velars",
 answer: "sounds made with the tongue touching or near the velum: Call, Guy, haNG"
)

Card.create!(
 deck_id: linguistics.id,
 question: "pharyngeals",
 answer: "sounds made through modification of airflow in the pharynx by retracting the tongue or constricting the pharynx
-found in many Arabic dialects, but not English"
)

Card.create!(
 deck_id: linguistics.id,
 question: "fricatives",
 answer: "consonants produced with a continuous airflow through the mouth
-continuous audible noise because air passes through a very narrow opening in the glottis or the vocal tract
-English: voiced and voiceless"
)

Card.create!(
 deck_id: linguistics.id,
 question: "affricates",
 answer: "-noncontinuant consonants that show slow release of the closure
-English's are alveopalatal: Church, Jump"
)

Card.create!(
 deck_id: linguistics.id,
 question: "glide",
 answer: "rapidly articulated nonsyllabic segment
-Yes, boY
-Wet, noW"
)

Card.create!(
 deck_id: linguistics.id,
 question: "diphthongs",
 answer: "vowels that exhibit a change in quality within a single syllable
major-buy [aj], boy [>j], now [aw]
minor- play [ej], go [ow]"
)

Card.create!(
 deck_id: linguistics.id,
 question: "feature (phonological)",
 answer: "the smallest unit of analysis of phonological structure, combinations of which make up segments (eg nasal, continuant)"
)

Card.create!(
 deck_id: linguistics.id,
 question: "sounds produced by curling the tongue tip back in the mouth (American English r)",
 answer: "retroflex"
)

Card.create!(
 deck_id: linguistics.id,
 question: "double consonants (eg [tt]) that are articulated for a longer period of time than the corresponding single consonant (eg [t])",
 answer: "geminates"
)

Card.create!(
 deck_id: linguistics.id,
 question: "the distribution of allophones in their respective phonetic environments such that one never appears in the same phonetic context as the other (eg distribution of long and short vowels in English)",
 answer: "complementary distribution"
)

Card.create!(
 deck_id: linguistics.id,
 question: "a type of transcription of sounds where phonetic details are ignored and only phonemic contrast is recorded",
 answer: "phonemic transcription"
)

# visual system

Card.create!(
  deck_id: visual_system.id,
  question: "A tiny hole that lets reflections from only one direction pass through; perfect image but not enough light",
  answer: "pinhole optics"
)

Card.create!(
  deck_id: visual_system.id,
  question: "pinhole camera eye",
  answer: "nautilus"
)

Card.create!(
  deck_id: visual_system.id,
  question: "2 lenses; 260,000,000 receptors",
  answer: "human eyes"
)

Card.create!(
  deck_id: visual_system.id,
  question: "main focus; only cones",
  answer: "fovea"
)

Card.create!(
  deck_id: visual_system.id,
  question: "blind spot; where the optic nerve leaves the eye",
  answer: "optic disk"
)

Card.create!(
  deck_id: visual_system.id,
  question: "when there's no change in response; nerve's stop responding from fatigue; troxler fading",
  answer: "adaptation"
)

Card.create!(
  deck_id: visual_system.id,
  question: "LGN",
  answer: "behind eye; crossed visual fields; on/off center like ganglion; organized with nearby parts of visual field next to each other"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Hubel & Wiesel discovered; respond to bars; constructed from LGN cells in a line; located in V1",
  answer: "Simple cells"
)

Card.create!(
  deck_id: visual_system.id,
  question: "discovered orientation selectivity; hierarchy of cells and their connections to describe RFs; vision grounded on these line detectors",
  answer: "Simple cells"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Cortical magnification",
  answer: "fovea overepresented in the brain"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Hypercolumn",
  answer: "in V1, lots of orientation columns stacked up; ocular dominance slabs from each eye; all measurements for a local area"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Stereopsis",
  answer: "Different images to both eyes i.e. R/B glasses; match them up, creates depth"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Mechanism for stereopsis",
  answer: "Ocular dominance slabs in V1
Binocular cells that respond to a preferred disparity"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Cortical color blindness",
  answer: "Damage to V4; Mr. I; cones still work"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Opponent process theory",
  answer: "R/G fight each other -> B/Y fight each other; Ganglion cells in the retina do this"
)

Card.create!(
  deck_id: visual_system.id,
  question: "Cone types",
  answer: "S - Blue; M - Green; L - Red"
)

# perception modules

Card.create!(
  deck_id: perception_modules.id,
  question: "-Broca's patient `Tan`, only capable of saying word `tan` and had paralysis of right side of body, other than that normal
-Broca's Area: Localized region for production of language",
  answer: "Broca's Area"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Motor Cortex/Somatosensory Cortex",
  answer: "-Both on top of cortex
-Adjacent cells on motor cortex activate adjacent muscles in body
-Adjacent cells on somatosensory cortex respond to adjacent receptors on skin"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Corpus callosum",
  answer: "-Fibers connecting left and right hemispheres and facilitates interhemispheric communication"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "What (ventral) pathway",
  answer: "-To inferior part of temporal lobe, object recognition"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Where (dorsal) pathway",
  answer: "-To parietal lobe, location, action, navigating, grasping"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Physiology of Subjective Contours",
  answer: "-V2 cells can't tell the difference between an illusory line and a real one"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Inferotemporal Cortex",
  answer: "-Cells that respond to `parts`
-Characteristic spatial patterns that are part of familiar shapes
-Meaningless on their own"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Parahippocampal Place Area (PPA)",
  answer: "-Inner mid portion of temporal lobe
-Recognition of places, fMRI shows activity when viewing houses, outdoor scenes or buildings"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Fusiform Face Area (FFA)",
  answer: "-Ventral temporal cortex
-Face recognition
-Damage here leads to face recognition problems: prosopagnosia"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Lateral Occipital Cortex",
  answer: "-Recognition of objects
-Damage here leads to object recognition problems: visual agnosia"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Extrastriate Body Area (EBA)",
  answer: "-Extrastriate cortex in occipital area
-Recognition of whole human bodies or parts from photos, stick figures or silhouettes but low activity to faces, objects, or animal bodies"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Visual Agnosia",
  answer: "-Due to damage to lateral occipital cortex
-Patient can see details, but cannot name objects or describe their function
-Patient DF cannot recognize objects or even report orientation
-Yet her hands orient correctly to openings or for grasping objects
-Supplementary vision in the dorsal `where` stream"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "-Inability to perceive continuous motion
-Bilateral damage to MT/MST
-Have no motion-based cues",
  answer: "Motion Blindness"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Mediotemporal Area (MT)",
  answer: "-Also, called V5
-Almost all neurons in this area are directionally selective
-V1 neurons deal with component motion
-Prefer motions of patterns
-Large RF's
-MT neurons integrate motion signals from V1 neurons, and are thereby able to detect pattern motion.
-When motion can be broken into horizontal or vertical movement, does not pick it up, only when motion is in diagonal directions"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Medial Superior Temporal Area (MST)",
  answer: "-Very large RF's, bigger than MT neurons
-Selective to optic flow patterns (Expansion, Contraction, Rotation, Shearing)
-The MST receives most of its inputs from the medial temporal (MT) area"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Balint's Syndrome",
  answer: "-Loss of attention or awareness to both sides
-Damage to both parietal lobes
-Attentional tunnel vision, only `see` one item at a time
-Neglect and Balint's show parietal lobes important in
control of attention"
)

Card.create!(
  deck_id: perception_modules.id,
  question: "Parietal Lobes",
  answer: "-Responsible for attention; neglect and Balint's Syndrome show importance"
)

# cogneuro

#intro to cogsci https://quizlet.com/32894119/cogsci-lastmin-final-flash-cards/

#neuro https://quizlet.com/32730813/mcb-64-final-flash-cards/

#langthought
