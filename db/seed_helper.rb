require 'sanitize'

def read_cards(file_path)
  cards = []
  File.open(file_path, "r") do |f|
    f.each_line do |line|
      card = Hash.new
      line = line.split("~A:~").map { |line| Sanitize.clean(line.chomp) }
      if line[0].include?("~IMG~")
        q = line[0].split("~IMG~")
        card["question"] = q[0]
        card["question_image"] = q[1]
      else
        card["question"] = line[0]
      end
      if line[1].include?("~IMG~")
        a = line[1].split("~IMG~")
        card["answer"] = a[0]
        card["answer_image"] = a[1]
      else
        card["answer"] = line[1]
      end
      cards << card
    end
  end
  cards
end
