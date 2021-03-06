export const createSubject = (subject) => {
  return $.ajax({
    method: 'post',
    url: '/api/subjects',
    data: subject
  });
};

export const updateSubject = (subject, id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/subjects/${id}`,
    data: subject
  });
};

export const deleteSubject = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/subjects/${id}`
  });
};

export const fetchSubject = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/subjects/${id}`
  });
};

export const fetchSubjects = search => {
  return $.ajax({
    method: "get",
    url: "/api/subjects",
    data: search
  });
};

// subject follows
export const createSubjectFollow = (id) => {
  return $.ajax({
    method: 'post',
    url: '/api/subject_follows',
    data: {subject_follow: {subject_id: id}}
  });
};

export const deleteSubjectFollow = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/subject_follows/${id}`
  });
};
