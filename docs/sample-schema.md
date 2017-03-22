# Schema Information

## users (plus devise)

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique

## decks

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
title           | string    | not null

## deck_follows

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
deck_id         | integer   | not null, foreign key

## cards

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
deck_id         | integer   | not null, foreign key
question        | string    | not null
answer          | string    | not null

* later-- allow images to be uploaded too

## card_scores (user knowledge score of each card)

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
card_id         | integer   | not null, foreign key, indexed
user_id         | integer   | not null, foreign key, indexed
score           | integer   |

## taggings (on decks)
* refer to cats video
* https://rubyplus.com/articles/4241-Tagging-from-Scratch-in-Rails-5
