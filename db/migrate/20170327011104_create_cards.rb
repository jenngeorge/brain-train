class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.text :answer, null: false
      t.text :question, null: false
      t.integer :deck_id, null: false
      t.timestamps
    end
    add_index :cards, :deck_id
  end
end
