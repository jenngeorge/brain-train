class AddDefaultToCardScores < ActiveRecord::Migration[5.0]
  def change
    change_column :card_scores, :score, :integer, :default => 0
  end
end
