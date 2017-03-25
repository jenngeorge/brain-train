class AddSubjectidIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :decks, :subject_id
  end
end
