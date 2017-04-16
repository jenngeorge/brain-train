class AddCardScores < ActiveRecord::Migration[5.0]
  def change
    create_table :card_scores do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :score
      t.timestamps
    end
    add_index :card_scores, :user_id
    add_index :card_scores, :card_id
  end
end
