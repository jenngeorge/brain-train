class AddUniquenessToCardScores < ActiveRecord::Migration[5.0]
  def change
    add_index :card_scores, [:user_id, :card_id], unique: true 
  end
end
