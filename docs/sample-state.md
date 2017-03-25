```json
{
  session: {
    currentUser: {
      id: 1,
      username: "Jenn"
    }
  },
  subjects: {
    byId: {
      1: {
        title: "CS",
        deckIds: [1, 2]
      },
      2: {
        title: "Languages",
        deckIds: [3, 4]
      }
    }
    allIds: [1, 2]
  },
  decks: {
    byId: {
      1: {
        title: "ES6",
        cardIds: [1, 2]
      },
      2: {
        title: "SQL",
        cardIds: [3, 4]
      }
    }
    allIds: [1, 2]
  }
  cards: {
    byId: {
      1: {
        question: "do u love ES6",
        answer: "yes",
        score: 1
      },
      2: {
        question: "do u love arrow functions",
        answer: "yes",
        score: 3
      }
    }
  }
}
```
