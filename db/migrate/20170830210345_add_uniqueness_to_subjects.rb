class AddUniquenessToSubjects < ActiveRecord::Migration[5.0]
  def change
    add_index :subjects, :title, unique: true 
  end
end
