# API Endpoints

## HTML API

### Root

- `GET /` - loads React app

## JSON API

### Session (Devise)

- `POST   /users/sign_in`
- `DELETE /users/sign_out`

### Users
- `POST   /users` (devise register new user)
- `PATCH  /users` (devise update user registration)
- `GET api/users`
- `GET api/users/:idtre`

### Decks
- `POST   api/decks`
- `PATCH   api/decks/:id`
- `GET   api/decks`
- `GET   api/decks/:id`
- `DELETE   api/decks/:id`

### Subjects
- `POST   api/subjects`
- `PATCH   api/subjects/:id`
- `GET   api/subjects`
- `GET   api/subjects/:id`
- `DELETE   api/subjects/:id`

### Cards
- `POST   api/cards`
- `PATCH   api/cards/:id`
- `GET   api/cards`
- `GET   api/cards/:id`
- `DELETE   api/cards/:id`

### Card scores
- `POST   api/card-scores``
- `DELETE   api/card-scores/:id`

### Deck follows
- `POST   api/followed-decks``
- `DELETE   api/followed-decks/:id`
