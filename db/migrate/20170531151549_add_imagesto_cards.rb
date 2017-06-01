class AddImagestoCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :answer_image, :string
    add_column :cards, :question_image, :string
  end
end
