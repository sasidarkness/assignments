
SELECT a.id, a.title, a.description, a.due_date
FROM assignments a
JOIN lessons l ON a.lesson_id = l.id
WHERE l.course_id = 1;  