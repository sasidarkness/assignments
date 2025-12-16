
SELECT emp_id, REPLACE(phone, '-', '') AS clean_phone
FROM employees;