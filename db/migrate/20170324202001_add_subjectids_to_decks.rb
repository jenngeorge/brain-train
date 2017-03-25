class AddSubjectidsToDecks < ActiveRecord::Migration[5.0]
  def change
    add_column :decks, :subject_id, :integer, null: false
  end
end
