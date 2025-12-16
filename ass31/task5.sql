
SELECT u.id AS student_id, u.name AS student_name, c.name AS course_name
FROM users u
JOIN enrollments e ON u.id = e.user_id
JOIN courses c ON e.course_id = c.id
WHERE u.role = 'student';