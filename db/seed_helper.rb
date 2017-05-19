require 'sanitize'

def read_cards(file_path)
  cards = []
  File.open(file_path, "r") do |f|
    f.each_line do |line|
      line = line.split("~A:~").map { |line| Sanitize.clean(line.chomp) }
      # card = ["question", "answer"]
      cards << line
    end
  end
  cards
end
