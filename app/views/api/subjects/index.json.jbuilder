@subjects.each do |subject|
  json.set! subject.id do
    json.partial! "subject", locals: {subject: subject, subject_follows: subject.subject_follows}
  end
end
