# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170830210345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_scores", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "card_id",                null: false
    t.integer  "score",      default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["card_id"], name: "index_card_scores_on_card_id", using: :btree
    t.index ["user_id", "card_id"], name: "index_card_scores_on_user_id_and_card_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_card_scores_on_user_id", using: :btree
  end

  create_table "cards", force: :cascade do |t|
    t.text     "answer",                      null: false
    t.text     "question",                    null: false
    t.integer  "deck_id",                     null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "question_image_file_name"
    t.string   "question_image_content_type"
    t.integer  "question_image_file_size"
    t.datetime "question_image_updated_at"
    t.string   "answer_image_file_name"
    t.string   "answer_image_content_type"
    t.integer  "answer_image_file_size"
    t.datetime "answer_image_updated_at"
    t.string   "answer_image"
    t.string   "question_image"
    t.index ["deck_id"], name: "index_cards_on_deck_id", using: :btree
  end

  create_table "decks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "subject_id", null: false
    t.index ["subject_id"], name: "index_decks_on_subject_id", using: :btree
    t.index ["user_id"], name: "index_decks_on_user_id", using: :btree
  end

  create_table "subject_follows", force: :cascade do |t|
    t.integer "user_id",    null: false
    t.integer "subject_id", null: false
    t.index ["subject_id"], name: "index_subject_follows_on_subject_id", using: :btree
    t.index ["user_id"], name: "index_subject_follows_on_user_id", using: :btree
  end

  create_table "subjects", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_subjects_on_title", unique: true, using: :btree
    t.index ["user_id"], name: "index_subjects_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
