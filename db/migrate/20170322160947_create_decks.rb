class CreateDecks < ActiveRecord::Migration[5.0]
  def change
    create_table :decks do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.timestamps
    end
    add_index :decks, :user_id
  end
end
