class AddAttachmentAnswerImageToCards < ActiveRecord::Migration
  def self.up
    change_table :cards do |t|
      t.attachment :answer_image
    end
  end

  def self.down
    remove_attachment :cards, :answer_image
  end
end
